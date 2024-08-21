# react-bootstrap-multilevel-dropdownbutton

This is very simple example of how to create multi level / multi nested dropdown menu using just generic react-bootstrap and DropButton (which normally goes just one level)

- included example here:
- ![image](https://github.com/user-attachments/assets/0266e6f9-b9d1-4698-a974-9a6736102b78)

- how i use it elsewhere:
- ![image](https://github.com/user-attachments/assets/08bb97b1-67fe-4087-bf47-29e381178bb0)


# Ho to run test this project
- git clone git@github.com:Sznapsollo/react-bootstrap-multilevel-dropdownbutton.git
- cd react-bootstrap-multilevel-dropdownbutton
- npm install
- npm start

# what is needed (what should you add to your project)
- react-bootstrap
- bootstrap
- DropDownMenu.js (from this project)

# What does DropDownMenu.js do
- it just displays normal DropdownButton content unless you specify in menu template that there is submenu for given node and in such case it will recursively put another DropDownMenu in menu tree. This is just brief example so adjusting the look of menu (override with css), direction of arrows (drop prop on DropdownButton), how to handle actions .. its all up to you ;-) have fun.

Note that title property can take text but also any html element (inlcuding for example react-icons) so there are many possibilities here. I included icons nad text color in example.

# How to create my own menu
- menu should be provided to DropDownMenu using the following template (example in App.js)

```
[
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
]

```
