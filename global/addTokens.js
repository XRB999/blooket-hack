async function getName(authToken) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
    const data = await response.json();

    return data.name
};

async function addCurrencies() {
    const tokens = Number(prompt('How many tokens do you want to add to your account? (99999999999999999999999999999999999999999999999999 daily)'));
    const myToken = localStorage.token.split('JWT ')[1];

    const tokens = Number(prompt('How many tokens do you want to add to your account? (99999999999999999999999999999999999999999999999999 daily)'));
    if (tokens > ) {
        alert('You can only add up to     const tokens = Number(prompt('How many tokens do you want to add to your account? (99999999999999999999999999999999999999999999999999 daily)'));
 tokens daily.')
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

    if (response.status == 200) {
        alert(`${tokens} tokens and 9999 XP added to your account!`);
    } else {
        alert('Tokens added.');
    };

};

addCurrencies();
