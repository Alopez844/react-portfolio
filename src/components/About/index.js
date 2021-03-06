import React from 'react';
import image from '../../assets/5Z3A9692.jpg';

export default function About() {
  return (
    <div>
        <section className='title'>
            <h1 class= 'name'>About Alejandro Lopez</h1>
            <hr></hr>

            <div className='row justify-content-center'>
                <div className='col-18' id='about-section'>
                    <img class='mb-5' src={image} alt='Alejandro Lopez'/>

                    <p>
                        My name is Alejandro Lopez, Morbi tristique senectus et netus et malesuada fames ac. In fermentum et sollicitudin ac orci phasellus. Consectetur a erat nam at lectus. Massa tincidunt nunc pulvinar sapien. In nisl nisi scelerisque eu. Porttitor rhoncus dolor purus non. Elementum tempus egestas sed sed risus pretium. Magna eget est lorem ipsum dolor sit. Lorem donec massa sapien faucibus et molestie. Nulla facilisi cras fermentum odio eu. Urna condimentum mattis pellentesque id nibh tortor id. Pretium viverra suspendisse potenti nullam.
                    </p>
                    <p>
                        Morbi tristique senectus et netus et malesuada fames ac. In fermentum et sollicitudin ac orci phasellus. Consectetur a erat nam at lectus. Massa tincidunt nunc pulvinar sapien. In nisl nisi scelerisque eu. Porttitor rhoncus dolor purus non. Elementum tempus egestas sed sed risus pretium. Magna eget est lorem ipsum dolor sit. Lorem donec massa sapien faucibus et molestie. Nulla facilisi cras fermentum odio eu. Urna condimentum mattis pellentesque id nibh tortor id. Pretium viverra suspendisse potenti nullam.   
                    </p>  
                    <p>
                        Tortor id aliquet lectus proin. Euismod nisi porta lorem mollis. Amet nulla facilisi morbi tempus iaculis urna. Fermentum et sollicitudin ac orci phasellus egestas tellus. Amet risus nullam eget felis eget. Orci phasellus egestas tellus rutrum tellus. Purus sit amet volutpat consequat mauris nunc congue nisi. Magna etiam tempor orci eu lobortis elementum nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Urna neque viverra justo nec ultrices dui.    
                    </p>
                    <p>
                        You can also checkout my <a href='#/resume' class='link'>resume</a> here.
                    </p>
                </div>    
            </div>
        </section>
    </div>
  )
}


