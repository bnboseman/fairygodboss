import React, { Component } from 'react';
import Excerpt from './Excerpt';

class MessageBoard extends Component {
  state = {
    boards: [
        {
            "id": 0,
            "date": "2017-12-10T07:26:59",
            "title": "ex amet et",
            "content": "Ipsum aliqua est nostrud fugiat labore. Qui magna aute tempor deserunt. Laboris duis commodo veniam cupidatat incididunt esse Lorem. Proident proident irure laborum sunt proident Lorem aute nulla eiusmod in laboris. Lorem amet est quis ut do Lorem eiusmod consectetur consectetur ea ut.\r\nId anim officia nulla et adipisicing et magna cillum velit. Incididunt in in aliquip quis irure irure anim. Pariatur commodo qui aliqua eu. Eu duis sit duis duis officia est cupidatat. Pariatur nulla ullamco ea do sit eiusmod velit sit. Adipisicing ex elit deserunt Lorem aliqua sint ea. Consequat et aute do magna id reprehenderit.\r\nSint ut nisi qui incididunt esse anim ipsum proident esse qui nisi sint labore. Consequat pariatur cillum occaecat aliquip Lorem culpa ipsum ipsum. Officia duis non non et labore anim consectetur eiusmod. Magna quis adipisicing minim fugiat pariatur consectetur incididunt est nostrud ex ut culpa anim cupidatat.\r\n",
            "comments": [
            ]
        },
        {
            "id": 1,
            "date": "2017-10-24T03:09:55",
            "title": "commodo culpa anim",
            "content": "Minim elit eiusmod culpa fugiat nostrud. In sint irure officia amet cillum adipisicing ex elit duis irure. Eiusmod laborum velit eiusmod sunt cillum est laboris nisi mollit incididunt enim. Magna ipsum eu ex dolore fugiat cillum occaecat dolor ut. Lorem laboris laborum eiusmod Lorem excepteur. Id nostrud aliquip tempor ex ullamco eu velit laboris consequat mollit velit magna tempor nisi. Mollit incididunt culpa veniam aliquip voluptate nisi.\r\nEx nulla minim occaecat in quis cupidatat dolore consequat nulla deserunt nulla sunt nostrud magna. Labore sunt enim id fugiat ut. Dolor exercitation velit non est velit ut commodo eu excepteur occaecat amet quis. Magna sit nulla elit sint dolor cillum adipisicing mollit aute deserunt sunt. Qui esse adipisicing voluptate cupidatat in deserunt qui quis sint ad. Labore magna duis officia cillum cupidatat dolore magna officia.\r\nFugiat amet ipsum eiusmod ea in consequat amet elit eu adipisicing elit quis sunt ullamco. Fugiat sunt incididunt reprehenderit excepteur consequat Lorem. Consectetur consectetur in nulla adipisicing incididunt. Aliqua enim laborum amet proident consequat eu Lorem nulla. Aliquip excepteur id irure nisi est irure cillum tempor pariatur labore. Ad dolor in qui non in. Incididunt enim commodo anim sit dolor non est nulla veniam cupidatat pariatur sint.\r\n",
            "comments": [
                {
                    "id": 0,
                    "name": "Bertie Adams",
                    "content": "dolore velit eiusmod nulla velit"
                }
            ]
        },
        {
            "id": 2,
            "date": "2017-09-30T09:18:09",
            "title": "qui eiusmod cupidatat",
            "content": "Laborum velit do esse cillum quis ullamco ipsum sit. Commodo magna aliquip sunt sunt eu reprehenderit incididunt laborum anim pariatur. Nisi excepteur aliqua esse dolor nisi irure Lorem incididunt mollit deserunt dolor amet commodo. Consectetur consequat eiusmod eiusmod officia non ad.\r\nEt nostrud quis voluptate aute excepteur amet eiusmod. Officia cupidatat nulla laborum officia velit est aliqua. Nulla voluptate eiusmod eu est ad et laborum qui ad duis cupidatat do tempor. Commodo officia officia culpa enim Lorem duis voluptate consectetur tempor laboris laborum officia nisi ex. Do ut ad irure deserunt sit nisi Lorem mollit id. Nostrud esse eiusmod amet qui irure aute commodo reprehenderit proident occaecat ut. Non magna officia enim labore amet.\r\nAliqua ea sit sit velit dolore. Dolore irure cupidatat voluptate incididunt deserunt ipsum. Duis voluptate aute enim culpa ad anim nulla amet dolore minim excepteur culpa officia. Eiusmod culpa officia veniam amet.\r\n",
            "comments": [
                {
                    "id": 0,
                    "name": "Estelle Mcmillan",
                    "content": "aliqua labore nulla qui laborum"
                },
                {
                    "id": 1,
                    "name": "Tillman Wilson",
                    "content": "ex dolor laboris deserunt deserunt"
                }
            ]
        },
        {
            "id": 3,
            "date": "2017-08-01T06:45:35",
            "title": "dolor nostrud commodo",
            "content": "Ipsum eiusmod nostrud do elit fugiat quis exercitation commodo non veniam culpa proident cupidatat. Non sit eu nostrud cillum sint est eiusmod. Dolor magna incididunt voluptate sint irure mollit. Sit amet aute laboris commodo laborum nulla qui cupidatat non veniam do nostrud ipsum nisi. Veniam eu adipisicing elit adipisicing minim adipisicing nisi.\r\nCupidatat aute fugiat mollit ea voluptate culpa qui ad sint consequat et et. Aliqua ullamco nisi cillum pariatur sunt cupidatat et do laborum minim enim. Ut ad tempor culpa ex.\r\nProident nulla sunt sunt dolor do cupidatat do qui. Aliqua dolor exercitation ad excepteur eu excepteur cupidatat nisi enim labore amet exercitation laboris. Tempor excepteur in consequat ea officia minim do mollit exercitation id enim.\r\n",
            "comments": [
            ]
        },
        {
            "id": 4,
            "date": "2017-07-08T04:37:43",
            "title": "officia labore est",
            "content": "Mollit consectetur et cupidatat minim dolore amet sint nisi dolore proident irure ea aliquip. Commodo cupidatat velit fugiat culpa anim aliqua sint culpa est adipisicing Lorem eu. Ea pariatur irure dolor enim.\r\nEt duis enim nostrud mollit consectetur et magna enim voluptate. Laboris elit labore id esse sint proident. Nisi qui mollit duis et ea labore eu cillum ut duis esse aliqua.\r\nEnim sit labore magna duis tempor cillum pariatur culpa in. Voluptate in mollit ullamco ea sit incididunt ad nulla aliqua qui mollit qui quis. Irure anim incididunt nostrud enim proident quis veniam magna. Proident proident dolor id reprehenderit proident mollit ex pariatur qui qui adipisicing quis veniam. Deserunt tempor qui enim commodo labore amet fugiat consequat magna do consectetur. Ipsum enim consequat culpa laborum laboris culpa est deserunt esse officia aute proident ut nulla. Deserunt et sint irure laboris in ut tempor eu enim consectetur aute.\r\n",
            "comments": [
                {
                    "id": 0,
                    "name": "Roberta Mcgowan",
                    "content": "adipisicing sunt ex cillum cupidatat"
                }
            ]
        }
    ]

  }

  render() {
    const {boards} = this.state;
    return (
      <div className="MessageBoard">
          {boards.map(post => (
                  <div key={post.id}>
                    <Excerpt post={post} />
                  </div>
              )
          )}
      </div>
    );
  }
}

export default MessageBoard;
