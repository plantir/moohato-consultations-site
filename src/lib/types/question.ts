export type questionHomeBox = {
    asked: number;
    today_asked: number;
    question_without_answer: number;
    score: number
}
export type Question = {
    name?: string;
    date?: any;
    close?: boolean;
    lock?: boolean;
    question?: string;
    id?: number;
}