  const copyContent = () => {
      navigator.clipboard.writeText(text);
      alert("copied email to clipboard");
      console.log('Content copied to clipboard');
  }

  let text = "dr.preetimishra@doonuniversity.ac.in";
  let mail = document.querySelector('.email');
  mail.addEventListener('click', copyContent);