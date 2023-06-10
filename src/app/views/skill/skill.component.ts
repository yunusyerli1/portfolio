import { Component } from '@angular/core';
import { ICardList } from 'src/app/models/ICardModel';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  imageSetting = {
    height: 80,
    width: 80
  };

  serviceList: ICardList[] = [
    {
      title: "Expertly skilled in HTML, CSS, and JS development",
      text:  "Skilled in the foundational languages of website development - HTML, CSS, and JavaScript",
      image: "../../../assets/icon/vector.png"
    },
    {
      title: "Expertise in developing responsive websites",
      text:"Able to design and develop websites that are optimized for viewing on different devices",
      image: "../../../assets/icon/responsive.png"
    },
    {
      title: "Expertise in front-end frameworks",
      text:  "Skilled in using front-end frameworks to develop complex, interactive web applications",
      image: "../../../assets/icon/angular.png"
    },
    {
      title: "UI/UX design principles knowledge",
      text:  "Knowledgeable in the principles of UI and UX design, and able to apply them to website design",
      image: "../../../assets/icon/data-science.png"
    },
    {
      title: "Cross-browser compatibility familiarity",
      text:  "Experienced in ensuring website functionality and compatibility across different web browsers",
      image: "../../../assets/icon/web-design.png"
    },
    {
      title: "Website optimization experience",
      text:  "Experienced in optimizing website speed, security, and search engine rankings",
      image: "../../../assets/icon/setting.png"
    },
    {
      title: "Strong problem-solving skills",
      text:  "Able to quickly identify and solve technical issues that arise during website development",
      image: "../../../assets/icon/thinking.png"
    },
    {
      title: "Up-to-date with industry trends",
      text:  "Stay up-to-date with the latest website development trends and technologies",
      image: "../../../assets/icon/styled-components.png"
    },
    // {
    //   title: "Effective communication and collaboration",
    //   text:  "Skilled in communicating with clients and collaborating with members of the team",
    //   image: "../../../assets/icon/agree.png"
    // },
    // {
    //   title: "Dedicated to high-quality code/designs",
    //   text:  "Committed to producing code and designs that are of the highest quality and meet clients' needs",
    //   image: "../../../assets/icon/data-ai.png"
    // }

  ];


}
