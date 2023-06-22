import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept.</p>
        </Modal>  
    );

    return(
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus odio, scelerisque sit amet arcu eget, tempus hendrerit metus. Quisque volutpat lectus id velit euismod, at volutpat nibh ornare. Duis viverra semper ligula ullamcorper imperdiet. Nulla maximus eros sit amet tortor lacinia, ac mattis urna efficitur. Mauris nibh nisi, efficitur non pharetra vel, porta a dolor. Maecenas lectus mi, mattis at lectus at, tempus accumsan ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum, est ac tincidunt posuere, nisl urna iaculis mi, at ultricies turpis nunc id sem. Aliquam sagittis, magna a fringilla tempor, nibh felis tempus tortor, cursus sodales quam justo non orci. Donec augue odio, dictum ut erat id, feugiat dignissim odio. Proin id eros porta eros pulvinar tincidunt. Integer egestas, lacus eget maximus porttitor, enim enim maximus ante, a volutpat dui eros id orci. Quisque facilisis tellus non volutpat faucibus.
            </p>
        </div>
    );
}

export default ModalPage;