#!/bin/bash
# set -e

# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
#     CREATE USER george;
#     CREATE DATABASE event;
#     GRANT ALL PRIVILEGES ON DATABASE event TO george;
# EOSQL