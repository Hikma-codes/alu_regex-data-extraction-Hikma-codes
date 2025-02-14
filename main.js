#!/usr/bin/node
//The creation of an object that will be later changed to a string by forEach(item =>...) for match() module to work through them

let str = {
    "HTML tags" : ["<p>", '<div class="example">', '<img src="image.jpg" alt="description">']
    "Email addresses" : ["user@example.com", "firstname.lastname@company.co.uk"],
    "Credit card numbers" : ["1234 5678 9012 3456", "1234-5678-9012-3456"],
    "URLs" : ["https://www.example.com", "http://subdomain.example.org/pageLinks"],
    "Phone Numbers" : ["(123) 456-7890", "123-456-7890", "123.456.7890"],
    
};
//The regular expression patterns for fetching
let EmailRegex = /[a-zA-Z0-9.]+@[a-zA-Z]+\.com?(\.uk)?/g
let linkRegex = /https?:\/\/[a-zA-Z]+\.example\.[a-zA-Z]+(\/[a-zA-Z]+)?/g
let Phonenumber = /\(?\d{3,}\)?(\s|\.|-)\d{3,}(-|.)\d{4,}/g
let CreditCard = /\d{4,}(\s|-)\d{4,}(\s|-)\d{4,}(\s|-)\d{4,}/g
let HtmltagsRegex = /<[^>]+>/g
// loop used to start an iteration
for (key in str) {
    console.log(`the matches for ${key} are: \n`);
// forEach(item =>...)} used 
str[key].forEach(item => {
    let matched;
    if (key === "HTML tags") {
        matched = item.match(HtmltagsRegex);
      console.log(matched);
    } else if (key === "Email addresses") {
        matched = item.match(EmailRegex);
        console.log(matched);
    } else if (key === "URLs") {
        matched = item.match(linkRegex);
        console.log(matched);
    } else if (key === "Phone Numbers") {
        matched = item.match(Phonenumber);
        console.log(matched);
    } else{
        matched = item.match(CreditCard);
        console.log(matched);
    }
})



}
