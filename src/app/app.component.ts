import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    loadedFeature = 'recipe';
    numbers = [1, 2, 3, 4, 5];
    onlyOdd = false;
    oddNumbers = [1 , 3, 5 ];
    evenNumbers = [2, 4];
    onNavigate(feature: string){
      this.loadedFeature = feature;
    }

    accounts = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];
  
    onAccountAdded(newAccount: {name: string, status: string}) {
      this.accounts.push(newAccount);
    }
  
    onStatusChanged(updateInfo: {id: number, newStatus: string}) {
      this.accounts[updateInfo.id].status = updateInfo.newStatus;
    }
}
