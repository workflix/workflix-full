import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../envs/environment';
import { User } from '../models/user';
import { loadStripe } from '@stripe/stripe-js';
import { map } from 'rxjs';
