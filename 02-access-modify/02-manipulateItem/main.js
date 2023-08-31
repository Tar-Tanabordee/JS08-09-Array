const log = console.log;

const styles = ["Jazz", "Blues"];
styles[styles.length] = "Rock-n-Roll"
styles[1] = "Classsic"
delete styles[0];
log(styles.length); 
log(styles);