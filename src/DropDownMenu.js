import React from 'react'
import './menu_styles.css';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const DropDownMenu = ({ depthLevel, isSubmenu, menuItems, title }) => {

  return (
    <DropdownButton
        as={ButtonGroup}
        drop={'end'}
        variant={'success'}
        title={title}
      >
        {
          menuItems.map((menuItem, index) => {
            if (menuItem.submenu && menuItem.submenu.length > 0) {
              return <div key={`${depthLevel}_${index}`} className='subMenuLevel'>
                <DropDownMenu depthLevel={depthLevel+1} title={menuItem.title} menuItems={menuItem.submenu} isSubmenu={true} />
              </div>
            } else {
              return <Dropdown.Item key={`${depthLevel}_${index}`} eventKey={`${depthLevel}_${index}`} onClick={() => {if(menuItem.action) {menuItem.action(menuItem)}}}>{menuItem.title}</Dropdown.Item>
            }
          })
        }
      </DropdownButton>
  )
}

export default DropDownMenu


