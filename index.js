function add(){
   let amount=document.getElementById("amount").value;
   let duration=document.getElementById("duration").value;
   let intrest=document.getElementById("intrest").value;
   if(amount=="" || duration=="" || intrest==""){
    alert("Enter all fields")
   }
   const interest = (amount * (intrest * 0.01)) / duration;
   const total = ((amount / duration) + interest).toFixed(2);
   document.getElementById("res").innerHTML="EMI RS:"+total;

}