import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  flag:boolean=true;
  flag3:boolean=false;
  rupees:number;
  grams:number;
  goldRate:number=3000;
  GST:number;
  total:number;
  flag2:boolean=false;
  flag4:boolean=false;
  
  
  constructor() { }

  calGram($event){
    this.grams= (this.rupees/3000);
    this.GST=(3/100)*this.rupees;
    this.total=this.GST+this.rupees;
    this.flag2=false;
    this.btnEvent();
    console.log(this.flag2);

  }
  calRupee($event){
    this.rupees=this.grams*this.goldRate;
    this.GST=(3/100)*this.rupees;
    this.total=this.GST+this.rupees;
    this.flag2=false;
    this.btnEvent();
    console.log(this.flag2);
    
  }

  buyGold() {
    
    this.flag=false;
    this.flag3=true;
    console.log("flag="+this.flag);
  }
  bckToGold(){
    this.flag=confirm("please cancel to discrad");
    this.rupees=0;
    this.grams=0;
    this.btnEvent();
    this.flag=true;
    this.flag3=false;
    
  }

  conPurchase(){
    this.flag3=false;
    this.flag4=true;
  }

  btnEvent=function(){
    if(this.rupees==undefined || this.grams==undefined || this.rupees==0 || this.grams==0){
      return this.flag2=false;
    }else{
      return this.flag2=true;
    }
    
  }
   
  ngOnInit() {
    

}
}
