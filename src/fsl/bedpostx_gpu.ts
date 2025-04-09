// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BEDPOSTX_GPU_METADATA: Metadata = {
    id: "02e0576b912f976928ffd80cadc861e0456019aa.boutiques",
    name: "bedpostx_gpu",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface BedpostxGpuParameters {
    "__STYXTYPE__": "bedpostx_gpu";
    "subject_dir": string;
    "gpu_queue"?: string | null | undefined;
    "num_jobs"?: number | null | undefined;
    "num_fibers"?: number | null | undefined;
    "ard_weight"?: number | null | undefined;
    "burnin_period"?: number | null | undefined;
    "num_jumps"?: number | null | undefined;
    "sample_every"?: number | null | undefined;
    "deconv_model"?: number | null | undefined;
    "grad_nonlinear": boolean;
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
        "bedpostx_gpu": bedpostx_gpu_cargs,
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
 * Output object returned when calling `bedpostx_gpu(...)`.
 *
 * @interface
 */
interface BedpostxGpuOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function bedpostx_gpu_params(
    subject_dir: string,
    gpu_queue: string | null = null,
    num_jobs: number | null = null,
    num_fibers: number | null = null,
    ard_weight: number | null = null,
    burnin_period: number | null = null,
    num_jumps: number | null = null,
    sample_every: number | null = null,
    deconv_model: number | null = null,
    grad_nonlinear: boolean = false,
): BedpostxGpuParameters {
    /**
     * Build parameters.
    
     * @param subject_dir Directory containing the subject's DWI data and associated files (bvals, bvecs, data, nodif_brain_mask).
     * @param gpu_queue Name of the GPU(s) queue. Default: --coprocessor=cuda to let fsl_sub decide on the queue
     * @param num_jobs Number of jobs to queue. The data is divided into this number of parts, useful for a GPU cluster. Default: 4
     * @param num_fibers Number of fibres per voxel. Default: 3
     * @param ard_weight Automatic Relevance Determination (ARD) weight. More weight means fewer secondary fibres per voxel. Default: 1
     * @param burnin_period Burn-in period. Default: 1000
     * @param num_jumps Number of jumps. Default: 1250
     * @param sample_every Sample every N steps. Default: 25
     * @param deconv_model Deconvolution model. 1: with sticks, 2: with sticks with a range of diffusivities (default), 3: with zeppelins
     * @param grad_nonlinear Consider gradient nonlinearities. Default: off
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "bedpostx_gpu" as const,
        "subject_dir": subject_dir,
        "grad_nonlinear": grad_nonlinear,
    };
    if (gpu_queue !== null) {
        params["gpu_queue"] = gpu_queue;
    }
    if (num_jobs !== null) {
        params["num_jobs"] = num_jobs;
    }
    if (num_fibers !== null) {
        params["num_fibers"] = num_fibers;
    }
    if (ard_weight !== null) {
        params["ard_weight"] = ard_weight;
    }
    if (burnin_period !== null) {
        params["burnin_period"] = burnin_period;
    }
    if (num_jumps !== null) {
        params["num_jumps"] = num_jumps;
    }
    if (sample_every !== null) {
        params["sample_every"] = sample_every;
    }
    if (deconv_model !== null) {
        params["deconv_model"] = deconv_model;
    }
    return params;
}


function bedpostx_gpu_cargs(
    params: BedpostxGpuParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("bedpostx_gpu");
    cargs.push((params["subject_dir"] ?? null));
    if ((params["gpu_queue"] ?? null) !== null) {
        cargs.push(
            "-Q",
            (params["gpu_queue"] ?? null)
        );
    }
    if ((params["num_jobs"] ?? null) !== null) {
        cargs.push(
            "-NJOBS",
            String((params["num_jobs"] ?? null))
        );
    }
    if ((params["num_fibers"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["num_fibers"] ?? null))
        );
    }
    if ((params["ard_weight"] ?? null) !== null) {
        cargs.push(
            "-w",
            String((params["ard_weight"] ?? null))
        );
    }
    if ((params["burnin_period"] ?? null) !== null) {
        cargs.push(
            "-b",
            String((params["burnin_period"] ?? null))
        );
    }
    if ((params["num_jumps"] ?? null) !== null) {
        cargs.push(
            "-j",
            String((params["num_jumps"] ?? null))
        );
    }
    if ((params["sample_every"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["sample_every"] ?? null))
        );
    }
    if ((params["deconv_model"] ?? null) !== null) {
        cargs.push(
            "-model",
            String((params["deconv_model"] ?? null))
        );
    }
    if ((params["grad_nonlinear"] ?? null)) {
        cargs.push("-g");
    }
    return cargs;
}


function bedpostx_gpu_outputs(
    params: BedpostxGpuParameters,
    execution: Execution,
): BedpostxGpuOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: BedpostxGpuOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function bedpostx_gpu_execute(
    params: BedpostxGpuParameters,
    execution: Execution,
): BedpostxGpuOutputs {
    /**
     * Probabilistic tractography and diffusion MRI fitting tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `BedpostxGpuOutputs`).
     */
    params = execution.params(params)
    const cargs = bedpostx_gpu_cargs(params, execution)
    const ret = bedpostx_gpu_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function bedpostx_gpu(
    subject_dir: string,
    gpu_queue: string | null = null,
    num_jobs: number | null = null,
    num_fibers: number | null = null,
    ard_weight: number | null = null,
    burnin_period: number | null = null,
    num_jumps: number | null = null,
    sample_every: number | null = null,
    deconv_model: number | null = null,
    grad_nonlinear: boolean = false,
    runner: Runner | null = null,
): BedpostxGpuOutputs {
    /**
     * Probabilistic tractography and diffusion MRI fitting tool.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param subject_dir Directory containing the subject's DWI data and associated files (bvals, bvecs, data, nodif_brain_mask).
     * @param gpu_queue Name of the GPU(s) queue. Default: --coprocessor=cuda to let fsl_sub decide on the queue
     * @param num_jobs Number of jobs to queue. The data is divided into this number of parts, useful for a GPU cluster. Default: 4
     * @param num_fibers Number of fibres per voxel. Default: 3
     * @param ard_weight Automatic Relevance Determination (ARD) weight. More weight means fewer secondary fibres per voxel. Default: 1
     * @param burnin_period Burn-in period. Default: 1000
     * @param num_jumps Number of jumps. Default: 1250
     * @param sample_every Sample every N steps. Default: 25
     * @param deconv_model Deconvolution model. 1: with sticks, 2: with sticks with a range of diffusivities (default), 3: with zeppelins
     * @param grad_nonlinear Consider gradient nonlinearities. Default: off
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `BedpostxGpuOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BEDPOSTX_GPU_METADATA);
    const params = bedpostx_gpu_params(subject_dir, gpu_queue, num_jobs, num_fibers, ard_weight, burnin_period, num_jumps, sample_every, deconv_model, grad_nonlinear)
    return bedpostx_gpu_execute(params, execution);
}


export {
      BEDPOSTX_GPU_METADATA,
      BedpostxGpuOutputs,
      BedpostxGpuParameters,
      bedpostx_gpu,
      bedpostx_gpu_params,
};
