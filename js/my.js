let k = 0;
let p = 0;
let r;
let btns = document.getElementsByClassName("calcul");
console.log(btns);
var calc = document.getElementById("cl");
  
for (var thisBtn of btns) {
    thisBtn.addEventListener('click', function () {
          
        console.log(this.value)
        switch (this.value) {
            case "=":
                console.log(eval(calc.value))
                if (eval(calc.value)==="not available") {
                    alert("თვენს მიერ შეყვანილი მონაცემებში დაფიქსირდა შეცდომა, გთხოვთ დააკორექტიროთ")
                }
                calc.value = eval(calc.value);
                k = 1;
                break;
            case "AC":
                calc.value = "";
                break;
            case "÷":
                calc.value += "/"
                break;
            case "Off":
                document.getElementById("onOff").setAttribute("value", "On");
                r = document.getElementsByTagName("input")
                console.log(r)
                for (var x of r) {
                    x.setAttribute("disabled", "disabled");
                }
                document.getElementById("onOff").removeAttribute("disabled");
                break;
            case "On":
                document.getElementById("onOff").setAttribute("value", "Off");
                r = document.getElementsByTagName("input")
                console.log(r)
                for (var x of r) {
                    x.removeAttribute("disabled");
                }
                calc.value = "";
                break;
            case "←":
                calc.value = calc.value.slice(0, -1);
                console.log(calc.value)
                break;
            case "X²":
                calc.value = Math.pow(eval(calc.value), 2);
                break;
            case "√":
                calc.value = Math.sqrt(eval(calc.value));
                k = 1;
                break;

            case ")":
                if (k == 1) {
                    calc.value = "";
                    k = 0;
                }
                if (p == 1) {
                
                calc.value += this.value;
                p=0; break
                }
                if (p == 0) {
                    alert("ჯერ უნდა შეიყვანოთ გამხსნელი ფრჩხილი")
                    p = 1;
                }
                break;

                case "(":
                if (k == 1) {
                    calc.value = "";
                    k = 0;
                }
                
                
                calc.value += this.value;
                p=1;
                
                break;

                default:
                    if (k == 1) {
                        calc.value = "";
                        k = 0;
                    }
                    calc.value += this.value;

        }

    })
}