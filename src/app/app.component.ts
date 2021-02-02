import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "สุ่มรางวัล ";
  amount = "";
  value = "";
  total: any;

  ngOnInit() {}

  clickTestRate() {
    let test = "";
    this.total = 0;

    // const amountInt =
    for (let i = 0; i < +this.amount; i++) {
      // console.log(Math.floor(Math.random() * 100) + 1)
      let num = Math.floor(Math.random() * 100) + 1;
      console.log("เรทที่คุณได้ : " + num);
      if (num == 100) {
        this.total += 1000;
        1;

        console.log("ได้รับ 1000 บาท");
      }
      if (num == 99 || num == 98) {
        this.total += 500;
        2;

        console.log("ได้รับ 500 บาท");
      }
      if (num >= 95 && num <= 97) {
        this.total += 300;
        3;

        console.log("ได้รับ 300 บาท");
      }
      if (num >= 86 && num <= 94) {
        this.total += 100;
        9;

        console.log("ได้รับ 100 บาท");
      }
      if (num >= 76 && num <= 85) {
        this.total += 50;
        10;

        console.log("ได้รับ 50 บาท");
      }
      if (num >= 50 && num <= 75) {
        this.total += 10;
        26;

        console.log("ได้รับ 10 บาท");
      }
      if (num >= 1 && num <= 49) {
        this.total += 0;
        49;

        console.log("ได้รับ 0 บาท");
      }
    }
    console.log(
      "จำนวนครั้งที่ปั่น " +
        this.amount +
        " ครั้ง ยอดรวมที่ได้ " +
        +this.amount * +this.value +
        " บาท "
    );
    console.log("ยอดที่เสีย " + this.total + " บาท ");

    console.log("กำไร ", +this.amount * +this.value - this.total + " บาท ");
  }
}
