import { Component } from '@angular/core';
import { Parser } from 'expr-eval';

@Component({
  selector: 'app-root',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent{
  title = 'prog4_web';

  public result :string ="";

  add(valor:string){
    //if ()
    this.result = this.result + valor;
  }

  evaluateExpr()
  {
    var parser = new Parser();
    var expr = parser.parse(this.result);
    this.result = expr.evaluate();
  }

  clear() 
  {
    this.result = "";
  }
}
