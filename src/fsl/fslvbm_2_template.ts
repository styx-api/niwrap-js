// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLVBM_2_TEMPLATE_METADATA: Metadata = {
    id: "3a5ca9d9ae3d0b495395b095f669fd7d5c78293b.boutiques",
    name: "fslvbm_2_template",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface Fslvbm2TemplateParameters {
    "__STYXTYPE__": "fslvbm_2_template";
    "arch"?: string | null | undefined;
    "coprocessor"?: string | null | undefined;
    "coprocessor_multi"?: string | null | undefined;
    "coprocessor_class"?: string | null | undefined;
    "coprocessor_toolkit"?: string | null | undefined;
    "jobhold"?: string | null | undefined;
    "array_hold"?: string | null | undefined;
    "logdir"?: string | null | undefined;
    "mailoptions"?: string | null | undefined;
    "mailto"?: string | null | undefined;
    "name"?: string | null | undefined;
    "priority"?: string | null | undefined;
    "queue"?: string | null | undefined;
    "resource"?: string | null | undefined;
    "delete_job"?: string | null | undefined;
    "memory_gb"?: number | null | undefined;
    "parallel_env"?: string | null | undefined;
    "array_task"?: string | null | undefined;
    "array_native"?: string | null | undefined;
    "num_tasks"?: number | null | undefined;
    "coprocessor_name"?: string | null | undefined;
    "project"?: string | null | undefined;
    "runtime_limit"?: number | null | undefined;
    "job_file"?: InputPathType | null | undefined;
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
        "fslvbm_2_template": fslvbm_2_template_cargs,
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
 * Output object returned when calling `fslvbm_2_template(...)`.
 *
 * @interface
 */
interface Fslvbm2TemplateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fslvbm_2_template_params(
    arch: string | null = null,
    coprocessor: string | null = null,
    coprocessor_multi: string | null = null,
    coprocessor_class: string | null = null,
    coprocessor_toolkit: string | null = null,
    jobhold: string | null = null,
    array_hold: string | null = null,
    logdir: string | null = null,
    mailoptions: string | null = null,
    mailto: string | null = null,
    name: string | null = null,
    priority: string | null = null,
    queue: string | null = null,
    resource: string | null = null,
    delete_job: string | null = null,
    memory_gb: number | null = null,
    parallel_env: string | null = null,
    array_task: string | null = null,
    array_native: string | null = null,
    num_tasks: number | null = null,
    coprocessor_name: string | null = null,
    project: string | null = null,
    runtime_limit: number | null = null,
    job_file: InputPathType | null = null,
): Fslvbm2TemplateParameters {
    /**
     * Build parameters.
    
     * @param arch Specify architecture
     * @param coprocessor Specify coprocessor type
     * @param coprocessor_multi Specify multiple coprocessors
     * @param coprocessor_class Specify coprocessor class
     * @param coprocessor_toolkit Specify coprocessor toolkit
     * @param jobhold Hold job until specified job ID is completed
     * @param array_hold Hold array job until specified job ID is completed
     * @param logdir Specify log directory
     * @param mailoptions Specify mail options
     * @param mailto Specify email address for notifications
     * @param name Specify job name
     * @param priority Specify job priority
     * @param queue Specify queue
     * @param resource Specify resources
     * @param delete_job Delete specified job
     * @param memory_gb Specify memory in GB
     * @param parallel_env Specify parallel environment and threads
     * @param array_task Specify array task
     * @param array_native Specify array native task
     * @param num_tasks Specify number of tasks
     * @param coprocessor_name Specify coprocessor name
     * @param project Specify project
     * @param runtime_limit Specify runtime limit in minutes
     * @param job_file Specify job script file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslvbm_2_template" as const,
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
    if (memory_gb !== null) {
        params["memory_gb"] = memory_gb;
    }
    if (parallel_env !== null) {
        params["parallel_env"] = parallel_env;
    }
    if (array_task !== null) {
        params["array_task"] = array_task;
    }
    if (array_native !== null) {
        params["array_native"] = array_native;
    }
    if (num_tasks !== null) {
        params["num_tasks"] = num_tasks;
    }
    if (coprocessor_name !== null) {
        params["coprocessor_name"] = coprocessor_name;
    }
    if (project !== null) {
        params["project"] = project;
    }
    if (runtime_limit !== null) {
        params["runtime_limit"] = runtime_limit;
    }
    if (job_file !== null) {
        params["job_file"] = job_file;
    }
    return params;
}


function fslvbm_2_template_cargs(
    params: Fslvbm2TemplateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslvbm_2_template");
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
            (params["coprocessor_multi"] ?? null)
        );
    }
    if ((params["coprocessor_class"] ?? null) !== null) {
        cargs.push(
            "--coprocessor_class",
            (params["coprocessor_class"] ?? null)
        );
    }
    if ((params["coprocessor_toolkit"] ?? null) !== null) {
        cargs.push(
            "--coprocessor_toolkit",
            (params["coprocessor_toolkit"] ?? null)
        );
    }
    if ((params["jobhold"] ?? null) !== null) {
        cargs.push(
            "-j",
            (params["jobhold"] ?? null)
        );
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
    if ((params["memory_gb"] ?? null) !== null) {
        cargs.push(
            "-R",
            String((params["memory_gb"] ?? null))
        );
    }
    if ((params["parallel_env"] ?? null) !== null) {
        cargs.push(
            "-s",
            (params["parallel_env"] ?? null)
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
    if ((params["num_tasks"] ?? null) !== null) {
        cargs.push(
            "-x",
            String((params["num_tasks"] ?? null))
        );
    }
    if ((params["coprocessor_name"] ?? null) !== null) {
        cargs.push(
            "--has_coprocessor",
            (params["coprocessor_name"] ?? null)
        );
    }
    if ((params["project"] ?? null) !== null) {
        cargs.push(
            "--project",
            (params["project"] ?? null)
        );
    }
    if ((params["runtime_limit"] ?? null) !== null) {
        cargs.push(
            "-T",
            String((params["runtime_limit"] ?? null))
        );
    }
    if ((params["job_file"] ?? null) !== null) {
        cargs.push(
            "-z",
            execution.inputFile((params["job_file"] ?? null))
        );
    }
    return cargs;
}


function fslvbm_2_template_outputs(
    params: Fslvbm2TemplateParameters,
    execution: Execution,
): Fslvbm2TemplateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Fslvbm2TemplateOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fslvbm_2_template_execute(
    params: Fslvbm2TemplateParameters,
    execution: Execution,
): Fslvbm2TemplateOutputs {
    /**
     * FSL-VBM is a Voxel-Based Morphometry style analysis tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Fslvbm2TemplateOutputs`).
     */
    params = execution.params(params)
    const cargs = fslvbm_2_template_cargs(params, execution)
    const ret = fslvbm_2_template_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslvbm_2_template(
    arch: string | null = null,
    coprocessor: string | null = null,
    coprocessor_multi: string | null = null,
    coprocessor_class: string | null = null,
    coprocessor_toolkit: string | null = null,
    jobhold: string | null = null,
    array_hold: string | null = null,
    logdir: string | null = null,
    mailoptions: string | null = null,
    mailto: string | null = null,
    name: string | null = null,
    priority: string | null = null,
    queue: string | null = null,
    resource: string | null = null,
    delete_job: string | null = null,
    memory_gb: number | null = null,
    parallel_env: string | null = null,
    array_task: string | null = null,
    array_native: string | null = null,
    num_tasks: number | null = null,
    coprocessor_name: string | null = null,
    project: string | null = null,
    runtime_limit: number | null = null,
    job_file: InputPathType | null = null,
    runner: Runner | null = null,
): Fslvbm2TemplateOutputs {
    /**
     * FSL-VBM is a Voxel-Based Morphometry style analysis tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param arch Specify architecture
     * @param coprocessor Specify coprocessor type
     * @param coprocessor_multi Specify multiple coprocessors
     * @param coprocessor_class Specify coprocessor class
     * @param coprocessor_toolkit Specify coprocessor toolkit
     * @param jobhold Hold job until specified job ID is completed
     * @param array_hold Hold array job until specified job ID is completed
     * @param logdir Specify log directory
     * @param mailoptions Specify mail options
     * @param mailto Specify email address for notifications
     * @param name Specify job name
     * @param priority Specify job priority
     * @param queue Specify queue
     * @param resource Specify resources
     * @param delete_job Delete specified job
     * @param memory_gb Specify memory in GB
     * @param parallel_env Specify parallel environment and threads
     * @param array_task Specify array task
     * @param array_native Specify array native task
     * @param num_tasks Specify number of tasks
     * @param coprocessor_name Specify coprocessor name
     * @param project Specify project
     * @param runtime_limit Specify runtime limit in minutes
     * @param job_file Specify job script file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Fslvbm2TemplateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLVBM_2_TEMPLATE_METADATA);
    const params = fslvbm_2_template_params(arch, coprocessor, coprocessor_multi, coprocessor_class, coprocessor_toolkit, jobhold, array_hold, logdir, mailoptions, mailto, name, priority, queue, resource, delete_job, memory_gb, parallel_env, array_task, array_native, num_tasks, coprocessor_name, project, runtime_limit, job_file)
    return fslvbm_2_template_execute(params, execution);
}


export {
      FSLVBM_2_TEMPLATE_METADATA,
      Fslvbm2TemplateOutputs,
      Fslvbm2TemplateParameters,
      fslvbm_2_template,
      fslvbm_2_template_params,
};
