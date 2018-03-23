#!/usr/local/bin/env bash

COUNTER=0
while [  $COUNTER -lt 10 ]; do
    command cp "/Users/clay/.ghq/github.com/dunstontc/dunstontc.github.io/scripts/logos.js" "/Users/clay/.ghq/github.com/dunstontc/dunstontc.github.io/scripts/logos/logos-$COUNTER.js";
    let COUNTER=COUNTER+1;
done
