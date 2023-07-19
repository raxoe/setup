import React, { useState } from "react";

const tempData = [
    {
        "login": "raxoe",
        "id": 3233122,
        "avatar_url": "https://avatars.githubusercontent.com/u/3233122?v=4",
        "url": "https://api.github.com/users/raxoe",
        "type": "User"
    },
    {
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "url": "https://api.github.com/users/mojombo",
        "type": "User"
    },
    {
        "login": "defunkt",
        "id": 2,
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
        "url": "https://api.github.com/users/defunkt",
        "type": "User"
    }
];

function CardApp() {
    // this.state = { user: tempData };  //usecase of State for class component
    const [stateUser, setStateUser] = useState(tempData);
    return (
        <div style={{ width: '100%', height: '100vh', justifyContent: "center", display: 'flex', alignItems: 'center', 'flex-direction': 'column' }}>
            <h2> Card App</h2 >
            <CardList userList={stateUser} />
        </div>
    );
}

function CardList(props) {
    return (
        <>
            {props.userList.map(user => <Card key={user.id} {...user} />)}
        </>
    );
}

class Card extends React.Component {
    render() {
        const user = this.props;
        return (
            <>
                <div style={{border:'1px solid gray',borderRadius:'4px',marginBlock:'1px'}}>
                    <div>CardDetail</div>
                    <img src={user.avatar_url} style={{ width: '200px', height: '200px' }} />
                    <div>{user.login}</div>
                </div>
            </>
        );
    };
}

export default CardApp;