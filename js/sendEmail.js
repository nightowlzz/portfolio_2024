(function () {
  emailjs.init('qM_wNHusF2o-u7jIP');
})();

function SendMailForm() {
  const name = document.getElementById('fullName'),
    phone = document.getElementById('phoneNumber'),
    email = document.getElementById('email_id'),
    message = document.getElementById('message');
  const params = {
    from_name: name.value,
    reply_to: phone.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, ''),
    email_id: email.value,
    message: message.value,
  };

  if (params.from_name === '') {
    name.nextElementSibling.textContent = '이름을 작성해 주세요.';
    name.focus();
    return false;
  } else {
    name.nextElementSibling.textContent = '';
  }

  if (params.reply_to.length <= 8) {
    phone.nextElementSibling.textContent = '전화번호를 입력해 주세요.';
    phone.focus();
    return false;
  } else {
    phone.nextElementSibling.textContent = '';
  }

  if (params.message.length < 10) {
    message.nextElementSibling.textContent = '10자 이상 적어주세요.';
    message.focus();
    return false;
  } else {
    message.nextElementSibling.textContent = '';
  }

  emailjs.send('service_ia70bc2', 'template_l7q04wz', params).then(
    function (res) {
      alert('메일 전송이 완료되었습니다. 24시간 안에 연락드리겠습니다. 감사합니다.');
    },
    function (error) {
      alert('메일 전송이 실패하였습니다. 다시 시도 해주세요.');
    }
  );
}
