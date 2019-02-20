class ModalImg {

    /**
     * Create the ModalImg object
     *
     * @param {String} classSmallImg > the class for select img element in DOM
     * @returns {ModalImg}
     */
    constructor(classSmallImg = '.modal_smallImage') {
        // Create element div for backgound of the modal
        // and add ID and Style for this one.
        this.modalBackground = document.createElement('DIV');
        this.modalBackground.setAttribute('id', 'modalImg');
        this.addingStyle(this.modalBackground, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: '777',
            cursor: 'pointer',
            transition: 'all 500ms ease-in'
        });

        // Create element div for size img and center
        this.modalFrame = document.createElement('DIV');
        this.addingStyle(this.modalFrame, {
            position: 'relative',
            width: '90%',
            height: '90%',
            textAlign: 'center'
        });

        // Create element img for display img dynamicaly
        this.modalImg = document.createElement('IMG');
        this.addingStyle(this.modalImg, {
            maxWidth: '80%',
            maxHeight: '80%',
            border: '5px ridge black',
            borderRadius: '2px'
        });

        // Insert element in DOM, background in body, frame in brackgounrd and img in frame
        document.body.appendChild(this.modalBackground);
        this.modalBackground.appendChild(this.modalFrame);
        this.modalFrame.appendChild(this.modalImg);

        // Select all the element img in function of class
        let imgList = document.querySelectorAll(classSmallImg);
        for (let i = 0, c = imgList.length; i < c; i++) {
            // Add style for best user experiences
            imgList[i].style.cursor = 'pointer';
            // Add event listener for all img
            imgList[i].addEventListener('click', this.showModal.bind(this));
        }
        // Add event listener for modal backgounrd, for close
        this.modalBackground.addEventListener('click', this.hideModal.bind(this));
    }

    /**
     * Method for show modal with little animation of fade in
     *
     * @param {object} event
     */
    showModal(event) {
        // Change the src attribute of img in modal with the target src
        this.modalImg.src = event.target.src.replace('small', 'big');
        // Change the alt attribute of img in modal with the target alt
        this.modalImg.alt = event.target.alt;
        // Change the display of modal backgounrd
        this.modalBackground.style.display = 'flex';
        // Set a time out for launch the opacity change
        // If we don't, the transition doesn't work
        setTimeout(function () {
            this.modalBackground.style.opacity = '1';
        }.bind(this), 50);
    }

    /**
     * Method for hide modal with little animation of fade out
     *
     * @param {object} event
     */
    hideModal(event) {
        // Change the opacity of background for little transition
        this.modalBackground.style.opacity = '0';
        // Set a time out for launch the display change
        // If we don't, the transition for opacity doesn't work
        setTimeout(function () {
            this.modalBackground.style.display = 'none';
            this.modalImg.src = '';
        }.bind(this), 500);
    }

    /**
     * Little function for adding style easily
     *
     * @param {HTMLElement} element
     * @param {object javascript} stylesList
     */
    addingStyle(element, stylesList) {
        for (let properties in stylesList) {
            element.style[properties] = stylesList[properties];
        }
    }
}
// Launch the object
let modal = new ModalImg();
