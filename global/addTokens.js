async function getName(myToken) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + myToken);
    const data = await response.json();

    return data.name
};

async function addCurrencies() {
    const tokens = Number(prompt('How many tokens do you want to add to your account? (99999999999999999999999999999999999999999999999999 daily)'));
    const myToken = localStorage.token.split('JWT ')[1];

    if (tokens > 99999999999999999999999999999999999999999999999999) {
        alert('You can only add up to 99999999999999999999999999999999999999999999999999 tokens daily.')
    }

    const response = await fetch('https://api.blooket.com/api/users/add-rewards', {
        method: "PUT",
        headers: {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            addedTokens: tokens,
            addedXp: 9999,
            name: await getName(myToken)
        })
    });

    if (response.status == 400) {
        alert(`${99999999999999999999999999999999999999999999999999} tokens and 9999 XP added to your account!`);
    } else {
        alert('99999999999999999999999999999999999999999999999999 tokens and 9999 XP added to your account!.');
    };

};

addCurrencies();
