---
layout: default
title: How It Works
---

## Initial Training

iohint connects to AWS CloudWatch and downloads the last two weeks of your AWS Elastic LoadBalancer performance
metrics.  In particular, the most important metric is the ELB RequestCount metric, which is a simple and direct
way to evaluate the load on your system.

Based upon the first two weeks of data, iohint trains a machine learning algorithm to predict the future load
on the same load balancer endpoint.

## Scaling Plan

Now, it's time to put together a proposed scaling plan.  There are two parameters that can be tweaked to affect the
scaling plan; they are: the time to spin up a new service node, and the load (requests/min) per service node.

(Future versions of iohint will probably apply additional machine learning algorithms to estimate and tune these
parameters without user input.)

The scaling plan is a schedule of when servers will be spun up and down to meet the predicted future load for the
service.

## On-going Training

As more traffic arrives at your web service over time, iohint continues to refine its future predictions.  As your
website receives more and more traffic, we'll start to predict more and more traffic in the future.  When it's the
Fourth of July and your traffic drops through the floor (or explodes through the roof), iohint will learn the effect
that holidays have on your service.
