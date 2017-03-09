<dice-option>
    <option each="{dice in diceList}" value="{dice.val}">{dice.label}</option>
    this.diceList = [
        {val: 0, label:''},
        {val: 4, label:'d4'},
        {val: 6, label:'d6'},
        {val: 8, label:'d8'},
        {val: 10, label:'d10'},
        {val: 12, label:'d12'},
        {val: 13, label:'L+1'},
        {val: 14, label:'L+2'}
   ]
</dice-option>