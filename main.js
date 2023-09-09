console.log('Hello World!');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const currentDateElement = document.getElementById('currentDate');
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
currentDateElement.innerText = formattedDate;

// Event listener for "Beli" button click
const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', function() {
  const paymentMethod = document.getElementById('paymentMethod').value;

  // Redirect based on payment method
  switch (paymentMethod) {
    case 'dana':
      window.location.href = 'https://google.com/';
      break;
    case 'gopay':
      window.location.href = 'https://www.example.com/credit-card';
      break;
    case 'banktf':
      window.location.href = 'https://www.example.com/bank-transfer';
      break;
    default:
      break;
  }
});
