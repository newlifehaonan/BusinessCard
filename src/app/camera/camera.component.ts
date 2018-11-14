import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TextdetectionService} from '../services/textdetection.service';
import { saveAs } from '../../../node_modules/file-saver/dist/FileSaver.js';
import {Businesscard} from '../models/businesscard';
import {ValuepassingService} from '../services/valuepassing.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('video') public video: ElementRef;

  @ViewChild('canvas') public canvas: ElementRef;

  public captures: Array<any>;
  public card: Businesscard;

  constructor(private router: Router, private detect: TextdetectionService, private transit: ValuepassingService) {
    this.captures = [];
  }
  ngOnInit() {
  }


  ngAfterViewInit(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(
          stream => {
              this.video.nativeElement.src = window.URL.createObjectURL(stream);
      });
    }
  }


  // this doesn't work
  ngOnDestroy(): void {
    navigator.mediaDevices.getUserMedia( { video: true})
      .then(
        stream => {
          stream.stop();
        }
      );
  }

  capture() {
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL());
    const payload2: any = {
      'requests': [
        {
          'image': {
            'content' : this.captures[0].substring(22, this.captures[0].length)
          },
          'features': [
            {
              'type': 'TEXT_DETECTION',
              'maxResults': 1
            }
          ]
        }
      ]
    }
    this.detect.onDodetection(payload2);
    this.card = this.detect.businesscard;
    this.card.imageUri = this.captures[0].substring(22, this.captures[0].length);
    this.transit.addcard(this.card);
    // avigated to infomation panel
    this.router.navigate(['landingpage/snapreview']);
  }
}

