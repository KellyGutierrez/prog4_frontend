import { Component } from '@angular/core';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.scss']
})
export class OrganigramaComponent  {
  data1: TreeNode[];
  data2: TreeNode[];
  data: TreeNode[];

  selectedNode: TreeNode;

  constructor() {
    this.init()
   }

  init() {
    this.data = [{
        label: 'CEO',
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        data: {name:'Walter White', 'avatar': 'walter.jpg'},
        children: [
            {
                label: 'CFO',
                type: 'person',
                styleClass: 'p-person',
                expanded: true,
                data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                children:[{
                    label: 'Tax',
                    styleClass: 'department-cfo'
                },
                {
                    label: 'Legal',
                    styleClass: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                styleClass: 'p-person',
                expanded: true,
                data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                children:[{
                    label: 'Operations',
                    styleClass: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                styleClass: 'p-person',
                expanded: true,
                data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                children:[{
                    label: 'Development',
                    styleClass: 'department-cto',
                    expanded: true,
                    children:[{
                        label: 'Analysis',
                        styleClass: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        styleClass: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        styleClass: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    styleClass: 'department-cto'
                },
                {
                    label: 'R&D',
                    styleClass: 'department-cto'
                }]
            }
        ]
    }];
  }
}
