// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_SUB_METADATA: Metadata = {
    id: "e00d073a22a6b171f18d9558a8e06d7992bcb374.boutiques",
    name: "fsl_sub",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslSubParameters {
    "__STYXTYPE__": "fsl_sub";
    "arch"?: string | null | undefined;
    "coprocessor"?: string | null | undefined;
    "coprocessor_multi"?: number | null | undefined;
    "coprocessor_class"?: string | null | undefined;
    "coprocessor_class_strict": boolean;
    "coprocessor_toolkit"?: string | null | undefined;
    "usescript": boolean;
    "jobhold"?: string | null | undefined;
    "not_requeueable": boolean;
    "array_hold"?: string | null | undefined;
    "logdir"?: string | null | undefined;
    "mailoptions"?: string | null | undefined;
    "mailto"?: string | null | undefined;
    "novalidation": boolean;
    "name"?: string | null | undefined;
    "priority"?: string | null | undefined;
    "queue"?: string | null | undefined;
    "resource"?: string | null | undefined;
    "delete_job"?: string | null | undefined;
    "jobram"?: number | null | undefined;
    "parallelenv_threads"?: string | null | undefined;
    "array_task"?: string | null | undefined;
    "array_native"?: string | null | undefined;
    "array_limit"?: number | null | undefined;
    "keep_jobscript": boolean;
    "project"?: string | null | undefined;
    "noramsplit": boolean;
    "jobtime"?: number | null | undefined;
    "has_coprocessor"?: string | null | undefined;
    "has_queues": boolean;
    "show_config": boolean;
    "verbose": boolean;
    "version": boolean;
    "fileisimage"?: InputPathType | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "fsl_sub": fsl_sub_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_sub(...)`.
 *
 * @interface
 */
interface FslSubOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fsl_sub_params(
    arch: string | null = null,
    coprocessor: string | null = null,
    coprocessor_multi: number | null = null,
    coprocessor_class: string | null = null,
    coprocessor_class_strict: boolean = false,
    coprocessor_toolkit: string | null = null,
    usescript: boolean = false,
    jobhold: string | null = null,
    not_requeueable: boolean = false,
    array_hold: string | null = null,
    logdir: string | null = null,
    mailoptions: string | null = null,
    mailto: string | null = "root@fe8ea96c3a1a",
    novalidation: boolean = false,
    name: string | null = null,
    priority: string | null = null,
    queue: string | null = null,
    resource: string | null = null,
    delete_job: string | null = null,
    jobram: number | null = null,
    parallelenv_threads: string | null = null,
    array_task: string | null = null,
    array_native: string | null = null,
    array_limit: number | null = null,
    keep_jobscript: boolean = false,
    project: string | null = null,
    noramsplit: boolean = false,
    jobtime: number | null = null,
    has_coprocessor: string | null = null,
    has_queues: boolean = false,
    show_config: boolean = false,
    verbose: boolean = false,
    version: boolean = false,
    fileisimage: InputPathType | null = null,
): FslSubParameters {
    /**
     * Build parameters.
    
     * @param arch Architectures not available.
     * @param coprocessor No co-processor configured - ignored.
     * @param coprocessor_multi No co-processor configured - ignored
     * @param coprocessor_class No co-processor classes configured - ignored.
     * @param coprocessor_class_strict No co-processor classes configured - ignored.
     * @param coprocessor_toolkit No co-processor toolkits configured - ignored.
     * @param usescript Use flags embedded in scripts to set queuing options - not supported
     * @param jobhold Place a hold on this task until specified job id has completed.
     * @param not_requeueable Job cannot be requeued in the event of a node failure.
     * @param array_hold Not supported - will be converted to simple job hold
     * @param logdir Where to output logfiles.
     * @param mailoptions Email notification options (ignored).
     * @param mailto Email notification recipients (ignored).
     * @param novalidation Don't check for presence of script/binary in your searchpath
     * @param name Specify job name as it will appear on queue.
     * @param priority Specify job priority (not supported).
     * @param queue Specify the queue for the job (irrelevant if not running in a cluster environment).
     * @param resource Pass a resource request or constraint string through to the job scheduler.
     * @param delete_job Deletes a queued/running job.
     * @param jobram Max total RAM required for job (integer in GB).
     * @param parallelenv_threads No parallel environments configured.
     * @param array_task Specify a task file of commands to execute in parallel.
     * @param array_native Binary/Script will handle array task internally (mutually exclusive with --array_task).
     * @param array_limit Specify the maximum number of parallel job sub-tasks to run concurrently.
     * @param keep_jobscript Whether to create and save a job submission script.
     * @param project Specify the project (not relevant when not running in a cluster environment).
     * @param noramsplit Disable RAM splitting (not relevant when not running in a cluster environment).
     * @param jobtime Estimated job length in minutes, used to automatically choose the queue name.
     * @param has_coprocessor fsl_sub returns with exit code of 0 if specified coprocessor is configured.
     * @param has_queues fsl_sub returns with exit code of 0 if there's a compute cluster with queues configured.
     * @param show_config Display the configuration currently in force.
     * @param verbose Verbose mode.
     * @param version Show program's version number and exit.
     * @param fileisimage If <file> already exists and is an MRI image file, do nothing and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_sub" as const,
        "coprocessor_class_strict": coprocessor_class_strict,
        "usescript": usescript,
        "not_requeueable": not_requeueable,
        "novalidation": novalidation,
        "keep_jobscript": keep_jobscript,
        "noramsplit": noramsplit,
        "has_queues": has_queues,
        "show_config": show_config,
        "verbose": verbose,
        "version": version,
    };
    if (arch !== null) {
        params["arch"] = arch;
    }
    if (coprocessor !== null) {
        params["coprocessor"] = coprocessor;
    }
    if (coprocessor_multi !== null) {
        params["coprocessor_multi"] = coprocessor_multi;
    }
    if (coprocessor_class !== null) {
        params["coprocessor_class"] = coprocessor_class;
    }
    if (coprocessor_toolkit !== null) {
        params["coprocessor_toolkit"] = coprocessor_toolkit;
    }
    if (jobhold !== null) {
        params["jobhold"] = jobhold;
    }
    if (array_hold !== null) {
        params["array_hold"] = array_hold;
    }
    if (logdir !== null) {
        params["logdir"] = logdir;
    }
    if (mailoptions !== null) {
        params["mailoptions"] = mailoptions;
    }
    if (mailto !== null) {
        params["mailto"] = mailto;
    }
    if (name !== null) {
        params["name"] = name;
    }
    if (priority !== null) {
        params["priority"] = priority;
    }
    if (queue !== null) {
        params["queue"] = queue;
    }
    if (resource !== null) {
        params["resource"] = resource;
    }
    if (delete_job !== null) {
        params["delete_job"] = delete_job;
    }
    if (jobram !== null) {
        params["jobram"] = jobram;
    }
    if (parallelenv_threads !== null) {
        params["parallelenv_threads"] = parallelenv_threads;
    }
    if (array_task !== null) {
        params["array_task"] = array_task;
    }
    if (array_native !== null) {
        params["array_native"] = array_native;
    }
    if (array_limit !== null) {
        params["array_limit"] = array_limit;
    }
    if (project !== null) {
        params["project"] = project;
    }
    if (jobtime !== null) {
        params["jobtime"] = jobtime;
    }
    if (has_coprocessor !== null) {
        params["has_coprocessor"] = has_coprocessor;
    }
    if (fileisimage !== null) {
        params["fileisimage"] = fileisimage;
    }
    return params;
}


function fsl_sub_cargs(
    params: FslSubParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_sub");
    if ((params["arch"] ?? null) !== null) {
        cargs.push(
            "-a",
            (params["arch"] ?? null)
        );
    }
    if ((params["coprocessor"] ?? null) !== null) {
        cargs.push(
            "-c",
            (params["coprocessor"] ?? null)
        );
    }
    if ((params["coprocessor_multi"] ?? null) !== null) {
        cargs.push(
            "--coprocessor_multi",
            String((params["coprocessor_multi"] ?? null))
        );
    }
    if ((params["coprocessor_class"] ?? null) !== null) {
        cargs.push(
            "--coprocessor_class",
            (params["coprocessor_class"] ?? null)
        );
    }
    if ((params["coprocessor_class_strict"] ?? null)) {
        cargs.push("--coprocessor_class_strict");
    }
    if ((params["coprocessor_toolkit"] ?? null) !== null) {
        cargs.push(
            "--coprocessor_toolkit",
            (params["coprocessor_toolkit"] ?? null)
        );
    }
    if ((params["usescript"] ?? null)) {
        cargs.push("-F");
    }
    if ((params["jobhold"] ?? null) !== null) {
        cargs.push(
            "-j",
            (params["jobhold"] ?? null)
        );
    }
    if ((params["not_requeueable"] ?? null)) {
        cargs.push("--not_requeueable");
    }
    if ((params["array_hold"] ?? null) !== null) {
        cargs.push(
            "--array_hold",
            (params["array_hold"] ?? null)
        );
    }
    if ((params["logdir"] ?? null) !== null) {
        cargs.push(
            "-l",
            (params["logdir"] ?? null)
        );
    }
    if ((params["mailoptions"] ?? null) !== null) {
        cargs.push(
            "-m",
            (params["mailoptions"] ?? null)
        );
    }
    if ((params["mailto"] ?? null) !== null) {
        cargs.push(
            "-M",
            (params["mailto"] ?? null)
        );
    }
    if ((params["novalidation"] ?? null)) {
        cargs.push("-n");
    }
    if ((params["name"] ?? null) !== null) {
        cargs.push(
            "-N",
            (params["name"] ?? null)
        );
    }
    if ((params["priority"] ?? null) !== null) {
        cargs.push(
            "-p",
            (params["priority"] ?? null)
        );
    }
    if ((params["queue"] ?? null) !== null) {
        cargs.push(
            "-q",
            (params["queue"] ?? null)
        );
    }
    if ((params["resource"] ?? null) !== null) {
        cargs.push(
            "-r",
            (params["resource"] ?? null)
        );
    }
    if ((params["delete_job"] ?? null) !== null) {
        cargs.push(
            "--delete_job",
            (params["delete_job"] ?? null)
        );
    }
    if ((params["jobram"] ?? null) !== null) {
        cargs.push(
            "-R",
            String((params["jobram"] ?? null))
        );
    }
    if ((params["parallelenv_threads"] ?? null) !== null) {
        cargs.push(
            "-s",
            (params["parallelenv_threads"] ?? null)
        );
    }
    if ((params["array_task"] ?? null) !== null) {
        cargs.push(
            "-t",
            (params["array_task"] ?? null)
        );
    }
    if ((params["array_native"] ?? null) !== null) {
        cargs.push(
            "--array_native",
            (params["array_native"] ?? null)
        );
    }
    if ((params["array_limit"] ?? null) !== null) {
        cargs.push(
            "-x",
            String((params["array_limit"] ?? null))
        );
    }
    if ((params["keep_jobscript"] ?? null)) {
        cargs.push("--keep_jobscript");
    }
    if ((params["project"] ?? null) !== null) {
        cargs.push(
            "--project",
            (params["project"] ?? null)
        );
    }
    if ((params["noramsplit"] ?? null)) {
        cargs.push("-S");
    }
    if ((params["jobtime"] ?? null) !== null) {
        cargs.push(
            "-T",
            String((params["jobtime"] ?? null))
        );
    }
    if ((params["has_coprocessor"] ?? null) !== null) {
        cargs.push(
            "--has_coprocessor",
            (params["has_coprocessor"] ?? null)
        );
    }
    if ((params["has_queues"] ?? null)) {
        cargs.push("--has_queues");
    }
    if ((params["show_config"] ?? null)) {
        cargs.push("--show_config");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-V");
    }
    if ((params["fileisimage"] ?? null) !== null) {
        cargs.push(
            "-z",
            execution.inputFile((params["fileisimage"] ?? null))
        );
    }
    return cargs;
}


function fsl_sub_outputs(
    params: FslSubParameters,
    execution: Execution,
): FslSubOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslSubOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fsl_sub_execute(
    params: FslSubParameters,
    execution: Execution,
): FslSubOutputs {
    /**
     * FSL cluster submission tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslSubOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_sub_cargs(params, execution)
    const ret = fsl_sub_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_sub(
    arch: string | null = null,
    coprocessor: string | null = null,
    coprocessor_multi: number | null = null,
    coprocessor_class: string | null = null,
    coprocessor_class_strict: boolean = false,
    coprocessor_toolkit: string | null = null,
    usescript: boolean = false,
    jobhold: string | null = null,
    not_requeueable: boolean = false,
    array_hold: string | null = null,
    logdir: string | null = null,
    mailoptions: string | null = null,
    mailto: string | null = "root@fe8ea96c3a1a",
    novalidation: boolean = false,
    name: string | null = null,
    priority: string | null = null,
    queue: string | null = null,
    resource: string | null = null,
    delete_job: string | null = null,
    jobram: number | null = null,
    parallelenv_threads: string | null = null,
    array_task: string | null = null,
    array_native: string | null = null,
    array_limit: number | null = null,
    keep_jobscript: boolean = false,
    project: string | null = null,
    noramsplit: boolean = false,
    jobtime: number | null = null,
    has_coprocessor: string | null = null,
    has_queues: boolean = false,
    show_config: boolean = false,
    verbose: boolean = false,
    version: boolean = false,
    fileisimage: InputPathType | null = null,
    runner: Runner | null = null,
): FslSubOutputs {
    /**
     * FSL cluster submission tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param arch Architectures not available.
     * @param coprocessor No co-processor configured - ignored.
     * @param coprocessor_multi No co-processor configured - ignored
     * @param coprocessor_class No co-processor classes configured - ignored.
     * @param coprocessor_class_strict No co-processor classes configured - ignored.
     * @param coprocessor_toolkit No co-processor toolkits configured - ignored.
     * @param usescript Use flags embedded in scripts to set queuing options - not supported
     * @param jobhold Place a hold on this task until specified job id has completed.
     * @param not_requeueable Job cannot be requeued in the event of a node failure.
     * @param array_hold Not supported - will be converted to simple job hold
     * @param logdir Where to output logfiles.
     * @param mailoptions Email notification options (ignored).
     * @param mailto Email notification recipients (ignored).
     * @param novalidation Don't check for presence of script/binary in your searchpath
     * @param name Specify job name as it will appear on queue.
     * @param priority Specify job priority (not supported).
     * @param queue Specify the queue for the job (irrelevant if not running in a cluster environment).
     * @param resource Pass a resource request or constraint string through to the job scheduler.
     * @param delete_job Deletes a queued/running job.
     * @param jobram Max total RAM required for job (integer in GB).
     * @param parallelenv_threads No parallel environments configured.
     * @param array_task Specify a task file of commands to execute in parallel.
     * @param array_native Binary/Script will handle array task internally (mutually exclusive with --array_task).
     * @param array_limit Specify the maximum number of parallel job sub-tasks to run concurrently.
     * @param keep_jobscript Whether to create and save a job submission script.
     * @param project Specify the project (not relevant when not running in a cluster environment).
     * @param noramsplit Disable RAM splitting (not relevant when not running in a cluster environment).
     * @param jobtime Estimated job length in minutes, used to automatically choose the queue name.
     * @param has_coprocessor fsl_sub returns with exit code of 0 if specified coprocessor is configured.
     * @param has_queues fsl_sub returns with exit code of 0 if there's a compute cluster with queues configured.
     * @param show_config Display the configuration currently in force.
     * @param verbose Verbose mode.
     * @param version Show program's version number and exit.
     * @param fileisimage If <file> already exists and is an MRI image file, do nothing and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslSubOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_SUB_METADATA);
    const params = fsl_sub_params(arch, coprocessor, coprocessor_multi, coprocessor_class, coprocessor_class_strict, coprocessor_toolkit, usescript, jobhold, not_requeueable, array_hold, logdir, mailoptions, mailto, novalidation, name, priority, queue, resource, delete_job, jobram, parallelenv_threads, array_task, array_native, array_limit, keep_jobscript, project, noramsplit, jobtime, has_coprocessor, has_queues, show_config, verbose, version, fileisimage)
    return fsl_sub_execute(params, execution);
}


export {
      FSL_SUB_METADATA,
      FslSubOutputs,
      FslSubParameters,
      fsl_sub,
      fsl_sub_params,
};
