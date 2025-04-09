// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_WBC_METADATA: Metadata = {
    id: "53db1c7b3ddc8b97d52d6c3d88748dff5b0adcfd.boutiques",
    name: "mri_wbc",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriWbcParameters {
    "__STYXTYPE__": "mri_wbc";
    "functional_volume": InputPathType;
    "volume_mask"?: InputPathType | null | undefined;
    "lh_functional_surface": InputPathType;
    "lh_surface": InputPathType;
    "lh_inflated"?: InputPathType | null | undefined;
    "lh_mask"?: InputPathType | null | undefined;
    "lh_label"?: InputPathType | null | undefined;
    "rh_functional_surface": InputPathType;
    "rh_surface": InputPathType;
    "rh_inflated"?: InputPathType | null | undefined;
    "rh_mask"?: InputPathType | null | undefined;
    "rh_label"?: InputPathType | null | undefined;
    "rho_threshold"?: number | null | undefined;
    "dist_threshold"?: number | null | undefined;
    "threads"?: number | null | undefined;
    "debug": boolean;
    "checkopts": boolean;
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
        "mri_wbc": mri_wbc_cargs,
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
 * Output object returned when calling `mri_wbc(...)`.
 *
 * @interface
 */
interface MriWbcOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_wbc_params(
    functional_volume: InputPathType,
    lh_functional_surface: InputPathType,
    lh_surface: InputPathType,
    rh_functional_surface: InputPathType,
    rh_surface: InputPathType,
    volume_mask: InputPathType | null = null,
    lh_inflated: InputPathType | null = null,
    lh_mask: InputPathType | null = null,
    lh_label: InputPathType | null = null,
    rh_inflated: InputPathType | null = null,
    rh_mask: InputPathType | null = null,
    rh_label: InputPathType | null = null,
    rho_threshold: number | null = null,
    dist_threshold: number | null = null,
    threads: number | null = null,
    debug: boolean = false,
    checkopts: boolean = false,
): MriWbcParameters {
    /**
     * Build parameters.
    
     * @param functional_volume Functional volume file
     * @param lh_functional_surface Left hemisphere functional surface file
     * @param lh_surface Left hemisphere surface file
     * @param rh_functional_surface Right hemisphere functional surface file
     * @param rh_surface Right hemisphere surface file
     * @param volume_mask Mask for functional volume
     * @param lh_inflated Optional left hemisphere inflated surface file
     * @param lh_mask Mask for left hemisphere functional surface
     * @param lh_label Label mask for left hemisphere functional surface
     * @param rh_inflated Optional right hemisphere inflated surface file
     * @param rh_mask Mask for right hemisphere functional surface
     * @param rh_label Label mask for right hemisphere functional surface
     * @param rho_threshold Rho threshold value
     * @param dist_threshold Distance threshold value
     * @param threads Number of threads to use
     * @param debug Turn on debugging
     * @param checkopts Check options and exit without running
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_wbc" as const,
        "functional_volume": functional_volume,
        "lh_functional_surface": lh_functional_surface,
        "lh_surface": lh_surface,
        "rh_functional_surface": rh_functional_surface,
        "rh_surface": rh_surface,
        "debug": debug,
        "checkopts": checkopts,
    };
    if (volume_mask !== null) {
        params["volume_mask"] = volume_mask;
    }
    if (lh_inflated !== null) {
        params["lh_inflated"] = lh_inflated;
    }
    if (lh_mask !== null) {
        params["lh_mask"] = lh_mask;
    }
    if (lh_label !== null) {
        params["lh_label"] = lh_label;
    }
    if (rh_inflated !== null) {
        params["rh_inflated"] = rh_inflated;
    }
    if (rh_mask !== null) {
        params["rh_mask"] = rh_mask;
    }
    if (rh_label !== null) {
        params["rh_label"] = rh_label;
    }
    if (rho_threshold !== null) {
        params["rho_threshold"] = rho_threshold;
    }
    if (dist_threshold !== null) {
        params["dist_threshold"] = dist_threshold;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function mri_wbc_cargs(
    params: MriWbcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_wbc");
    cargs.push(
        "--fvol",
        execution.inputFile((params["functional_volume"] ?? null))
    );
    if ((params["volume_mask"] ?? null) !== null) {
        cargs.push(
            "--volmask",
            execution.inputFile((params["volume_mask"] ?? null))
        );
    }
    cargs.push(
        "--lh",
        execution.inputFile((params["lh_functional_surface"] ?? null))
    );
    cargs.push(
        "--lh",
        execution.inputFile((params["lh_surface"] ?? null))
    );
    if ((params["lh_inflated"] ?? null) !== null) {
        cargs.push(
            "--lh",
            execution.inputFile((params["lh_inflated"] ?? null))
        );
    }
    if ((params["lh_mask"] ?? null) !== null) {
        cargs.push(
            "--lhmask",
            execution.inputFile((params["lh_mask"] ?? null))
        );
    }
    if ((params["lh_label"] ?? null) !== null) {
        cargs.push(
            "--lhlabel",
            execution.inputFile((params["lh_label"] ?? null))
        );
    }
    cargs.push(
        "--rh",
        execution.inputFile((params["rh_functional_surface"] ?? null))
    );
    cargs.push(
        "--rh",
        execution.inputFile((params["rh_surface"] ?? null))
    );
    if ((params["rh_inflated"] ?? null) !== null) {
        cargs.push(
            "--rh",
            execution.inputFile((params["rh_inflated"] ?? null))
        );
    }
    if ((params["rh_mask"] ?? null) !== null) {
        cargs.push(
            "--rhmask",
            execution.inputFile((params["rh_mask"] ?? null))
        );
    }
    if ((params["rh_label"] ?? null) !== null) {
        cargs.push(
            "--rhlabel",
            execution.inputFile((params["rh_label"] ?? null))
        );
    }
    if ((params["rho_threshold"] ?? null) !== null) {
        cargs.push(
            "--rho",
            String((params["rho_threshold"] ?? null))
        );
    }
    if ((params["dist_threshold"] ?? null) !== null) {
        cargs.push(
            "--dist",
            String((params["dist_threshold"] ?? null))
        );
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["checkopts"] ?? null)) {
        cargs.push("--checkopts");
    }
    return cargs;
}


function mri_wbc_outputs(
    params: MriWbcParameters,
    execution: Execution,
): MriWbcOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriWbcOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_wbc_execute(
    params: MriWbcParameters,
    execution: Execution,
): MriWbcOutputs {
    /**
     * A tool for working with functional brain imaging data on surfaces and volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriWbcOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_wbc_cargs(params, execution)
    const ret = mri_wbc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_wbc(
    functional_volume: InputPathType,
    lh_functional_surface: InputPathType,
    lh_surface: InputPathType,
    rh_functional_surface: InputPathType,
    rh_surface: InputPathType,
    volume_mask: InputPathType | null = null,
    lh_inflated: InputPathType | null = null,
    lh_mask: InputPathType | null = null,
    lh_label: InputPathType | null = null,
    rh_inflated: InputPathType | null = null,
    rh_mask: InputPathType | null = null,
    rh_label: InputPathType | null = null,
    rho_threshold: number | null = null,
    dist_threshold: number | null = null,
    threads: number | null = null,
    debug: boolean = false,
    checkopts: boolean = false,
    runner: Runner | null = null,
): MriWbcOutputs {
    /**
     * A tool for working with functional brain imaging data on surfaces and volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param functional_volume Functional volume file
     * @param lh_functional_surface Left hemisphere functional surface file
     * @param lh_surface Left hemisphere surface file
     * @param rh_functional_surface Right hemisphere functional surface file
     * @param rh_surface Right hemisphere surface file
     * @param volume_mask Mask for functional volume
     * @param lh_inflated Optional left hemisphere inflated surface file
     * @param lh_mask Mask for left hemisphere functional surface
     * @param lh_label Label mask for left hemisphere functional surface
     * @param rh_inflated Optional right hemisphere inflated surface file
     * @param rh_mask Mask for right hemisphere functional surface
     * @param rh_label Label mask for right hemisphere functional surface
     * @param rho_threshold Rho threshold value
     * @param dist_threshold Distance threshold value
     * @param threads Number of threads to use
     * @param debug Turn on debugging
     * @param checkopts Check options and exit without running
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriWbcOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_WBC_METADATA);
    const params = mri_wbc_params(functional_volume, lh_functional_surface, lh_surface, rh_functional_surface, rh_surface, volume_mask, lh_inflated, lh_mask, lh_label, rh_inflated, rh_mask, rh_label, rho_threshold, dist_threshold, threads, debug, checkopts)
    return mri_wbc_execute(params, execution);
}


export {
      MRI_WBC_METADATA,
      MriWbcOutputs,
      MriWbcParameters,
      mri_wbc,
      mri_wbc_params,
};
