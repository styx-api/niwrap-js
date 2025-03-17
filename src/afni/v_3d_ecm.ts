// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_ECM_METADATA: Metadata = {
    id: "fe8e455e00c15b8128839ab77ca8b9a116a3a73b.boutiques",
    name: "3dECM",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dEcmParameters {
    "__STYXTYPE__": "3dECM";
    "in_file": InputPathType;
    "autoclip": boolean;
    "automask": boolean;
    "eps"?: number | null | undefined;
    "fecm": boolean;
    "full": boolean;
    "mask"?: InputPathType | null | undefined;
    "max_iter"?: number | null | undefined;
    "memory"?: number | null | undefined;
    "num_threads"?: number | null | undefined;
    "outputtype"?: "NIFTI" | "AFNI" | "NIFTI_GZ" | null | undefined;
    "out_file"?: string | null | undefined;
    "polort"?: number | null | undefined;
    "scale"?: number | null | undefined;
    "shift"?: number | null | undefined;
    "sparsity"?: number | null | undefined;
    "thresh"?: number | null | undefined;
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
        "3dECM": v_3d_ecm_cargs,
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
        "3dECM": v_3d_ecm_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_ecm(...)`.
 *
 * @interface
 */
interface V3dEcmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file name.
     */
    out_file: OutputPathType;
    /**
     * Output file.
     */
    out_file_: OutputPathType;
}


function v_3d_ecm_params(
    in_file: InputPathType,
    autoclip: boolean = false,
    automask: boolean = false,
    eps: number | null = null,
    fecm: boolean = false,
    full: boolean = false,
    mask: InputPathType | null = null,
    max_iter: number | null = null,
    memory: number | null = null,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    out_file: string | null = null,
    polort: number | null = null,
    scale: number | null = null,
    shift: number | null = null,
    sparsity: number | null = null,
    thresh: number | null = null,
): V3dEcmParameters {
    /**
     * Build parameters.
    
     * @param in_file Input file to 3decm.
     * @param autoclip Clip off low-intensity regions in the dataset.
     * @param automask Mask the dataset to target brain-only voxels.
     * @param eps Sets the stopping criterion for the power iteration; :math:`l2\|v_\text{old} - v_\text{new}\| < eps\|v_\text{old}\|`; default = 0.001.
     * @param fecm Fast centrality method; substantial speed increase but cannot accommodate thresholding; automatically selected if -thresh or -sparsity are not set.
     * @param full Full power method; enables thresholding; automatically selected if -thresh or -sparsity are set.
     * @param mask Mask file to mask input data.
     * @param max_iter Sets the maximum number of iterations to use in the power iteration; default = 1000.
     * @param memory Limit memory consumption on system by setting the amount of gb to limit the algorithm to; default = 2gb.
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param out_file Output image file name.
     * @param polort No description provided.
     * @param scale Scale correlation coefficients in similarity matrix to after shifting, x >= 0.0; default = 1.0 for -full, 0.5 for -fecm.
     * @param shift Shift correlation coefficients in similarity matrix to enforce non-negativity, s >= 0.0; default = 0.0 for -full, 1.0 for -fecm.
     * @param sparsity Only take the top percent of connections.
     * @param thresh Threshold to exclude connections where corr <= thresh.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dECM" as const,
        "in_file": in_file,
        "autoclip": autoclip,
        "automask": automask,
        "fecm": fecm,
        "full": full,
    };
    if (eps !== null) {
        params["eps"] = eps;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (max_iter !== null) {
        params["max_iter"] = max_iter;
    }
    if (memory !== null) {
        params["memory"] = memory;
    }
    if (num_threads !== null) {
        params["num_threads"] = num_threads;
    }
    if (outputtype !== null) {
        params["outputtype"] = outputtype;
    }
    if (out_file !== null) {
        params["out_file"] = out_file;
    }
    if (polort !== null) {
        params["polort"] = polort;
    }
    if (scale !== null) {
        params["scale"] = scale;
    }
    if (shift !== null) {
        params["shift"] = shift;
    }
    if (sparsity !== null) {
        params["sparsity"] = sparsity;
    }
    if (thresh !== null) {
        params["thresh"] = thresh;
    }
    return params;
}


function v_3d_ecm_cargs(
    params: V3dEcmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dECM");
    cargs.push(execution.inputFile((params["in_file"] ?? null)));
    if ((params["autoclip"] ?? null)) {
        cargs.push("-autoclip");
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["eps"] ?? null) !== null) {
        cargs.push(
            "-eps",
            String((params["eps"] ?? null))
        );
    }
    if ((params["fecm"] ?? null)) {
        cargs.push("-fecm");
    }
    if ((params["full"] ?? null)) {
        cargs.push("-full");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["max_iter"] ?? null) !== null) {
        cargs.push(
            "-max_iter",
            String((params["max_iter"] ?? null))
        );
    }
    if ((params["memory"] ?? null) !== null) {
        cargs.push(
            "-memory",
            String((params["memory"] ?? null))
        );
    }
    if ((params["num_threads"] ?? null) !== null) {
        cargs.push(String((params["num_threads"] ?? null)));
    }
    if ((params["outputtype"] ?? null) !== null) {
        cargs.push((params["outputtype"] ?? null));
    }
    if ((params["out_file"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["out_file"] ?? null)
        );
    }
    if ((params["polort"] ?? null) !== null) {
        cargs.push(
            "-polort",
            String((params["polort"] ?? null))
        );
    }
    if ((params["scale"] ?? null) !== null) {
        cargs.push(
            "-scale",
            String((params["scale"] ?? null))
        );
    }
    if ((params["shift"] ?? null) !== null) {
        cargs.push(
            "-shift",
            String((params["shift"] ?? null))
        );
    }
    if ((params["sparsity"] ?? null) !== null) {
        cargs.push(
            "-sparsity",
            String((params["sparsity"] ?? null))
        );
    }
    if ((params["thresh"] ?? null) !== null) {
        cargs.push(
            "-thresh",
            String((params["thresh"] ?? null))
        );
    }
    return cargs;
}


function v_3d_ecm_outputs(
    params: V3dEcmParameters,
    execution: Execution,
): V3dEcmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dEcmOutputs = {
        root: execution.outputFile("."),
        out_file: execution.outputFile([path.basename((params["in_file"] ?? null)), "_afni"].join('')),
        out_file_: execution.outputFile(["out_file"].join('')),
    };
    return ret;
}


function v_3d_ecm_execute(
    params: V3dEcmParameters,
    execution: Execution,
): V3dEcmOutputs {
    /**
     * Performs degree centrality on a dataset using a given maskfile via the 3dECM command.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dEcmOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_ecm_cargs(params, execution)
    const ret = v_3d_ecm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_ecm(
    in_file: InputPathType,
    autoclip: boolean = false,
    automask: boolean = false,
    eps: number | null = null,
    fecm: boolean = false,
    full: boolean = false,
    mask: InputPathType | null = null,
    max_iter: number | null = null,
    memory: number | null = null,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    out_file: string | null = null,
    polort: number | null = null,
    scale: number | null = null,
    shift: number | null = null,
    sparsity: number | null = null,
    thresh: number | null = null,
    runner: Runner | null = null,
): V3dEcmOutputs {
    /**
     * Performs degree centrality on a dataset using a given maskfile via the 3dECM command.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_file Input file to 3decm.
     * @param autoclip Clip off low-intensity regions in the dataset.
     * @param automask Mask the dataset to target brain-only voxels.
     * @param eps Sets the stopping criterion for the power iteration; :math:`l2\|v_\text{old} - v_\text{new}\| < eps\|v_\text{old}\|`; default = 0.001.
     * @param fecm Fast centrality method; substantial speed increase but cannot accommodate thresholding; automatically selected if -thresh or -sparsity are not set.
     * @param full Full power method; enables thresholding; automatically selected if -thresh or -sparsity are set.
     * @param mask Mask file to mask input data.
     * @param max_iter Sets the maximum number of iterations to use in the power iteration; default = 1000.
     * @param memory Limit memory consumption on system by setting the amount of gb to limit the algorithm to; default = 2gb.
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param out_file Output image file name.
     * @param polort No description provided.
     * @param scale Scale correlation coefficients in similarity matrix to after shifting, x >= 0.0; default = 1.0 for -full, 0.5 for -fecm.
     * @param shift Shift correlation coefficients in similarity matrix to enforce non-negativity, s >= 0.0; default = 0.0 for -full, 1.0 for -fecm.
     * @param sparsity Only take the top percent of connections.
     * @param thresh Threshold to exclude connections where corr <= thresh.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dEcmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_ECM_METADATA);
    const params = v_3d_ecm_params(in_file, autoclip, automask, eps, fecm, full, mask, max_iter, memory, num_threads, outputtype, out_file, polort, scale, shift, sparsity, thresh)
    return v_3d_ecm_execute(params, execution);
}


export {
      V3dEcmOutputs,
      V3dEcmParameters,
      V_3D_ECM_METADATA,
      v_3d_ecm,
      v_3d_ecm_params,
};
