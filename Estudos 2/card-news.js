class Cardnews extends HTMLElement {
	constructor(){
		super();


		const shadow = this.attachShadow({mode: "open"});
		shadow.appendChild(this.build());
		shadow.appendChild(this.styles());

	}

	build(){
		const componentRoot = document.createElement("div");
		componentRoot.setAttribute("class" , "card");

		const cardLeft = document.createElement ("div")
		cardLeft.setAttribute("class" , "card-left")

		const cardRight = document.createElement ("div")
		cardRight.setAttribute("class" , "card-right")

		componentRoot.appendChild(cardLeft);	
		componentRoot.appendChild(cardRight);

		return componentRoot;
	}

	sytles(){}
}

customElements.define ("card-news" , Cardnews);