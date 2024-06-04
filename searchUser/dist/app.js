"use strict";
let input = document.querySelector(".input");
let main_container = document.querySelector(".main-container");
console.log("hello this is anil hasda");
// fetcher function
const fetcher = async (url) => {
    let response = await fetch(url);
    let result = await response.json();
    return result;
};
let responseData = fetcher("https://api.github.com/users").then((response) => {
    response.forEach((ele) => {
        //  let  element:HTMLElement= document.createElement("div");
        //  element.setAttribute("class","element");
        main_container.innerHTML += `
  <div class="element">
  <img src=${ele.avatar_url} alt=${ele.login} width="100%"></img>
  <div class="user_name">Name:${ele.login}<div>
  <a href=${ele.url} target="blank">View Detail</a>
  </div>
  `;
    });
    // console.log(response);
});
const searchUser = async (e) => {
    main_container.innerHTML = "";
    e.preventDefault();
    let response = await fetcher("https://api.github.com/users");
    let filterData = response.filter(ele => ele.login.includes(input.value));
    (filterData.length > 0) ?
        filterData.forEach(ele => {
            main_container.innerHTML += `
    <div class="element">
    <img src=${ele.avatar_url} alt=${ele.login} width="100%"></img>
    <div class="user_name">Name:${ele.login}<div>
    <a href=${ele.url} target="blank">View Detail</a>
    </div>
    `;
        }) : main_container.innerHTML = `<div>No such data found ! Try another</div>`;
};
