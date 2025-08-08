#!/bin/bash

# Vérification du nombre d'arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Limitation à 3 arguments
    for ((i = 1; i <= 3 && i <= $#; i++)); do
        # Accéder directement aux arguments positionnels $1, $2, $3, ...
        eval echo \$$i
    done
fi
