const _copyContent = () => {
	navigator.clipboard.writeText(_text);
	alert("copied email to clipboard");
	console.log("Content copied to clipboard");
};

const _text = "dr.preetimishra@doonuniversity.ac.in";

export default () => {
	const _mail = document.querySelector(".email");
	_mail.addEventListener("click", _copyContent);
};
