window.onload = function (e) {
  document.querySelector('.wt-header-right').remove();
  const aboutSelector = '.wt-icon-box-wraper.center.p-lr30.p-tb50';
  const email = document.querySelector(`${aboutSelector}.block-shadow .icon-content h5`);
  const phone = document.querySelector(`${aboutSelector}.bdr-1.bdr-gray .icon-content`);
  const allElementsInfo = document.querySelectorAll(aboutSelector);
  if(allElementsInfo.length === 3){
   const contentElement =  allElementsInfo[2].children[1];
    if (contentElement){
      contentElement.innerHTML = `
        <div>
          <h4>Адрес</h4>
          <h5>м.Вінниця вул. Келецька 57</h5>
        </div>
      `;
    }
  }
  if (phone){
    phone.innerHTML = `
      <div>
        <h4>Телефон</h4>
        <h5>+38 068 830 90 44</h5>
        <h5>+38 093 258 17 50</h5>
      </div>
    `;
  }
  if (email){
    email.textContent = "kseniagubenko1987@gmail.com";
  }

  const contactSelector = ".widget.text-center";
  if (contactSelector){
    const adress = document.querySelector(`${contactSelector}.widget_address.m-b20 div.widget-section ul li`);
    if (adress){
      adress.textContent = `м.Вінниця вул. Келецька 57`;
    }
    const contact = document.querySelector(`${contactSelector}.getin-touch .widget-section ul`);
    const contactLis = contact.querySelectorAll('li');
    if (contactLis.length > 1){
      contactLis[0].textContent = "kseniagubenko1987@gmail.com";
      contactLis[1].innerHTML = `
      <div>
        <h5>+38 068 830 90 44</h5>
        <h5>+38 093 258 17 50</h5>
      </div>
    `;
    }
  }



}
