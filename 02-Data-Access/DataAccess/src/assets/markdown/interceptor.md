Investigate `app.interceptor.ts` and its registration in `demo.module.ts`. Also look at the network request.

```
providers: [
    DemoService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true,
    },
],
```
