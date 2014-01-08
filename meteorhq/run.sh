#!/bin/bash
cd /root/code/meteorhq-web/meteorhq
export PATH=$PATH:/usr/local/bin
export HOME=/root
nohup /usr/local/bin/meteor --port 8027 >/dev/null 2>&1 &
