import { Component, OnInit } from '@angular/core';
import { Data } from './data.model';
import { Job } from './data.model';
import { statistics } from './data.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    result: Data;
    result2:statistics[]=[];
    result1: Job[];

    title = 'simple array';
    title1 = 'array of object';
    title2 = 'object of array';

    arraySample = [
        'Windstorm',
        'Bombasto',
        'Magneta',
        'Tornado'
    ];

    arrayOfObjectSample = [
        {
            name: 'akki',
            position: 'software developer',
            salary: 20000
        },
        {
            name: 'navin',
            position: 'software devloper & tester',
            salary: 25000
        },
        {
            name: 'jyoti',
            position: 'software developer',
            salary: 35000
        }
    ];

    objectOfArraySample =
        {
            "status": true,
            "data": {
                "statistics": [
                    {
                        "State": "Karnataka",
                        "SurveyorName": "Keval Kakdiya",
                        "NoOfInt": "2",
                        "SampleReceived": "2",
                        "CancelledEntries": "0",
                        "Approved": "1",
                        "DisApproved": "1"
                    },
                    {
                        "State": "MAHARASHTRA",
                        "SurveyorName": "Keval Kakdiya",
                        "NoOfInt": "0",
                        "SampleReceived": "0",
                        "CancelledEntries": "1",
                        "Approved": "0",
                        "DisApproved": "0"
                    }
                ],
            }
        }

    ngOnInit() {
        this.result1 = this.arrayOfObjectSample;
        this.result2 =  this.objectOfArraySample.data.statistics
    }
}
