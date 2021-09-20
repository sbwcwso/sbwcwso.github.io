#include <stdio.h>
#include <signal.h>
#include <setjmp.h>
#include <unistd.h>

sigjmp_buf buf;

void handler(int sig) 
{
    siglongjmp(buf, 1);
}

int main() 
{
    if (!sigsetjmp(buf, 1)) {
        signal(SIGINT, handler);
	puts("starting\n");
    }
    else 
	puts("restarting\n");

    while(1) {
	sleep(1);
	puts("processing...\n");
    }
    exit(0); /* Control never reaches here */
}
