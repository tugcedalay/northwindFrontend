import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({SignedOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/D5MiGpOBbjLmQz70HiYmm1HlhvYygw.jpg" />
                <Dropdown pointing="top left" text="tuce"> 
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={SignedOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
