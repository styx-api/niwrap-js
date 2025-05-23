// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_WINSOR_METADATA: Metadata = {
    id: "ae0f40a7e76cc9dd4e8f1de77208f94a02310050.boutiques",
    name: "3dWinsor",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dWinsorParameters {
    "__STYXTYPE__": "3dWinsor";
    "irad"?: number | null | undefined;
    "cbot"?: number | null | undefined;
    "ctop"?: number | null | undefined;
    "nrep"?: number | null | undefined;
    "keepzero": boolean;
    "clip"?: number | null | undefined;
    "prefix"?: string | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "dataset": InputPathType;
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
        "3dWinsor": v_3d_winsor_cargs,
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
        "3dWinsor": v_3d_winsor_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_winsor(...)`.
 *
 * @interface
 */
interface V3dWinsorOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset with Winsorizing filter applied.
     */
    outfile_head: OutputPathType | null;
    /**
     * Output dataset with Winsorizing filter applied.
     */
    outfile_brik: OutputPathType | null;
}


function v_3d_winsor_params(
    dataset: InputPathType,
    irad: number | null = null,
    cbot: number | null = null,
    ctop: number | null = null,
    nrep: number | null = null,
    keepzero: boolean = false,
    clip: number | null = null,
    prefix: string | null = null,
    mask: InputPathType | null = null,
): V3dWinsorParameters {
    /**
     * Build parameters.
    
     * @param dataset Input dataset to apply the filter on.
     * @param irad Include all points within 'distance' rr in the operation, where distance is defined as sqrt(i*i+j*j+k*k), and (i,j,k) are voxel index offsets.
     * @param cbot Set bottom clip index to bb.
     * @param ctop Set top clip index to tt.
     * @param nrep Repeat filter nn times. If nn < 0, means to repeat filter until less than abs(n) voxels change.
     * @param keepzero Don't filter voxels that are zero.
     * @param clip Set voxels at or below 'xx' to zero.
     * @param prefix Use 'pp' as the prefix for the output dataset.
     * @param mask Use 'mmm' as a mask dataset - voxels NOT in the mask won't be filtered.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dWinsor" as const,
        "keepzero": keepzero,
        "dataset": dataset,
    };
    if (irad !== null) {
        params["irad"] = irad;
    }
    if (cbot !== null) {
        params["cbot"] = cbot;
    }
    if (ctop !== null) {
        params["ctop"] = ctop;
    }
    if (nrep !== null) {
        params["nrep"] = nrep;
    }
    if (clip !== null) {
        params["clip"] = clip;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    return params;
}


function v_3d_winsor_cargs(
    params: V3dWinsorParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dWinsor");
    if ((params["irad"] ?? null) !== null) {
        cargs.push(
            "-irad",
            String((params["irad"] ?? null))
        );
    }
    if ((params["cbot"] ?? null) !== null) {
        cargs.push(
            "-cbot",
            String((params["cbot"] ?? null))
        );
    }
    if ((params["ctop"] ?? null) !== null) {
        cargs.push(
            "-ctop",
            String((params["ctop"] ?? null))
        );
    }
    if ((params["nrep"] ?? null) !== null) {
        cargs.push(
            "-nrep",
            String((params["nrep"] ?? null))
        );
    }
    if ((params["keepzero"] ?? null)) {
        cargs.push("-keepzero");
    }
    if ((params["clip"] ?? null) !== null) {
        cargs.push(
            "-clip",
            String((params["clip"] ?? null))
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    return cargs;
}


function v_3d_winsor_outputs(
    params: V3dWinsorParameters,
    execution: Execution,
): V3dWinsorOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dWinsorOutputs = {
        root: execution.outputFile("."),
        outfile_head: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "+*.HEAD"].join('')) : null,
        outfile_brik: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "+*.BRIK"].join('')) : null,
    };
    return ret;
}


function v_3d_winsor_execute(
    params: V3dWinsorParameters,
    execution: Execution,
): V3dWinsorOutputs {
    /**
     * Apply a 3D 'Winsorizing' filter to a short-valued dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dWinsorOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_winsor_cargs(params, execution)
    const ret = v_3d_winsor_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_winsor(
    dataset: InputPathType,
    irad: number | null = null,
    cbot: number | null = null,
    ctop: number | null = null,
    nrep: number | null = null,
    keepzero: boolean = false,
    clip: number | null = null,
    prefix: string | null = null,
    mask: InputPathType | null = null,
    runner: Runner | null = null,
): V3dWinsorOutputs {
    /**
     * Apply a 3D 'Winsorizing' filter to a short-valued dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input dataset to apply the filter on.
     * @param irad Include all points within 'distance' rr in the operation, where distance is defined as sqrt(i*i+j*j+k*k), and (i,j,k) are voxel index offsets.
     * @param cbot Set bottom clip index to bb.
     * @param ctop Set top clip index to tt.
     * @param nrep Repeat filter nn times. If nn < 0, means to repeat filter until less than abs(n) voxels change.
     * @param keepzero Don't filter voxels that are zero.
     * @param clip Set voxels at or below 'xx' to zero.
     * @param prefix Use 'pp' as the prefix for the output dataset.
     * @param mask Use 'mmm' as a mask dataset - voxels NOT in the mask won't be filtered.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dWinsorOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_WINSOR_METADATA);
    const params = v_3d_winsor_params(dataset, irad, cbot, ctop, nrep, keepzero, clip, prefix, mask)
    return v_3d_winsor_execute(params, execution);
}


export {
      V3dWinsorOutputs,
      V3dWinsorParameters,
      V_3D_WINSOR_METADATA,
      v_3d_winsor,
      v_3d_winsor_params,
};
