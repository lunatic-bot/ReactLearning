function Hello() {
    let myName = 'Atal';
    let msgNo = 456;
    let fullName = () =>{return 'Atal Bajpai';}
    return <h3>
        MessageNo : {msgNo}, Hello! This is the future speaking! {fullName()}
    </h3>
}

export default Hello;