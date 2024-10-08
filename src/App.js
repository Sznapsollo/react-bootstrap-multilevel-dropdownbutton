import DropDownMenu from "./DropDownMenu";
import { IoAddCircleOutline } from "react-icons/io5";
import './App.css';

function App() {
  return (
    <div className="App">
      {
        <div style={{widdth: '200px'}}>
          <DropDownMenu
            depthLevel={0}
            key='createMenu'
            isSubmenu={false}
            title={'Hello I am your multilevel menu'}
            menuItems={[
              {
                "title": "Option 1",
                "submenu": null,
                "action": (itemClicked) => {
                  console.log('Clicked Option 1')
                }
              },
              {
                "title": <span style={{color: 'red'}}>Option 2</span>,
                "submenu": [
                  {
                    "title": <span style={{width: '130px', fontWeight: 'bold'}}><IoAddCircleOutline style={{margin: '0px'}} className='h3' />&nbsp;Please add me</span>,
                    "submenu": [
                      {
                        "title": "Option 2.1.1",
                        "submenu": null,
                        "action": (itemClicked) => {
                          console.log("Clicked Option 2.1.1")
                        }
                      },
                      {
                        "title": "Option 2.1.2",
                        "submenu": [
                          {
                            "title": "Option 2.1.2.1",
                            "submenu": null
                          },
                          {
                            "title": "Option 2.1.2.2",
                            "submenu": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "title": "Option 2.2",
                    "submenu": [
                      {
                        "title": "Option 2.2.1",
                        "submenu": null
                      },
                      {
                        "title": "Option 2.2.2",
                        "submenu": null
                      }
                    ]
                  }
                ]
              }
            ]}
          />
        </div>
      }
    </div>
  );
}

export default App;
