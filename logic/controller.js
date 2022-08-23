import Express from 'express';
const { Request, Response } = Express;

import { getFromDB, saveToDB } from './db';
import { getStudentStatusFromMocki } from './http';
/**
 * @param  {Request} req
 * @param  {Response} res
 */
export async function registerStudent(req, res) {
  const studentId = req.body.studentId;
  const name = req.body.name;
  
}

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export async function validateStudent(req, res) 
  const studentId = req.params.id;
  // WRITE YOUR CODE HERE


