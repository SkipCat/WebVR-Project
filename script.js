/* If you're feeling fancy you can add interactivity 
to your site with Javascript */

function addAnimation(data, parent) {
    var animation = document.createElement('a-animation');
    
    Object.keys(data).forEach(function(attr) {
        animation.setAttribute(attr, data[attr]);
    });
    
    parent.appendChild(animation);
}

function clearAnimations(parent) {
    var oldAnimations = parent.getElementsByTagName('a-animation'), index;
    
    for (index = oldAnimations.length - 1; index >= 0; index--) {
        oldAnimations[index].parentNode.removeChild(oldAnimations[index]);
    }
    
}

AFRAME.registerComponent('start-listener', {
    init: function () {
        var firstPanel = document.querySelector('#first-panel');
        var audio = document.querySelector('a-sound');
        
        let move = false;
        let playing = false;
        
        firstPanel.addEventListener('click', function () {
            // Plays audio
            if (!playing) {
                audio.play();
                playing = true;
            }
            
            // Moves camera
            if (!move) {
                var camera = document.querySelector('#camera-entity');
                var animation = document.createElement('a-animation');
                
                var animationData = {
                    class: 'start-anim',
                    attribute: 'position',
                    dur: 15000,
                    fill: 'forwards',
                    to: '3 1.2 -17.5'
                };
                
                addAnimation(animationData, camera);
                move = true;
            }
        });
    }
});

AFRAME.registerComponent('step-listener', {
    init: function () {
        var camera = document.querySelector('#camera-entity');
        var specialPlant = document.querySelector('#special-plant');
        var japaneseLamp = document.querySelector('#japanese-lamp');
        var insect = document.querySelector('#insect');
        
        specialPlant.addEventListener('click', function () {
            clearAnimations(camera);
            
            var animationData = {
                attribute: 'position',
                dur: 5000,
                fill: 'forwards',
                to: '3 17 -28'
            };
            
            addAnimation(animationData, camera);
        });
        
        japaneseLamp.addEventListener('click', function () {
            clearAnimations(camera);
            
            var animationData = {
                attribute: 'position',
                dur: 5000,
                fill: 'forwards',
                to: '3 28 -36'
            };
            
            addAnimation(animationData, camera);
        });
        
        insect.addEventListener('click', function () {
            clearAnimations(camera);
            
            var animationData = {
                attribute: 'position',
                dur: 5000,
                fill: 'forwards',
                to: '3 32 -42'
            };
            
            addAnimation(animationData, camera);
        });
    }
});