# react-bootstrap-multilevel-dropdownbutton

This is very simple example of hot to create multi level / multi nested dropdown menu using just generic react-bootstrap and DropButton (which normally goes just one level)

![image](https://github.com/user-attachments/assets/df866acc-1a2e-4c39-b850-f2c6557bfe21)


# Ho to run test this project
- git clone git@github.com:Sznapsollo/react-bootstrap-multilevel-dropdownbutton.git
- cd react-bootstrap-multilevel-dropdownbutton
- npm install
- npm start

# what is needed (what should you add to your project)
- react-bootstrap
- bootstrap
- DropDownMenu.js (from this project)

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
    "title": "Option 2",
    "submenu": [
        {
        "title": "Option 2.1",
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
