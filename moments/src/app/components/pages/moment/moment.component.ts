import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MomentService } from 'src/app/services/moment.service';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {
  moment?: Moment;


  constructor(private momentService: MomentService, private route: ActivatedRoute) {}

  nhOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data));
  }

}
