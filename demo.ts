function demo(): void {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("fullname");
    let fullname: string = input.value;

    let result: string = 'Hi ' + fullname +' !';

    let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result-content");
    p.innerHTML = result;

}

export {}; //ko đụng độ vs file js