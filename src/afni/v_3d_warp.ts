// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_WARP_METADATA: Metadata = {
    id: "f905d9db7eb4dc5e4bba6d7a453936b46a2e8f24.boutiques",
    name: "3dWarp",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dWarpParameters {
    "__STYXTYPE__": "3dWarp";
    "matvec_in2out"?: InputPathType | null | undefined;
    "matvec_out2in"?: InputPathType | null | undefined;
    "tta2mni": boolean;
    "mni2tta": boolean;
    "matparent"?: string | null | undefined;
    "card2oblique"?: string | null | undefined;
    "oblique_parent"?: string | null | undefined;
    "deoblique": boolean;
    "oblique2card": boolean;
    "disp_obl_xform_only": boolean;
    "linear": boolean;
    "cubic": boolean;
    "NN": boolean;
    "quintic": boolean;
    "wsinc5": boolean;
    "fsl_matvec": boolean;
    "newgrid"?: number | null | undefined;
    "gridset"?: string | null | undefined;
    "zpad"?: number | null | undefined;
    "verb": boolean;
    "prefix"?: string | null | undefined;
    "dataset": string;
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
        "3dWarp": v_3d_warp_cargs,
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
 * Output object returned when calling `v_3d_warp(...)`.
 *
 * @interface
 */
interface V3dWarpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_warp_params(
    dataset: string,
    matvec_in2out: InputPathType | null = null,
    matvec_out2in: InputPathType | null = null,
    tta2mni: boolean = false,
    mni2tta: boolean = false,
    matparent: string | null = null,
    card2oblique: string | null = null,
    oblique_parent: string | null = null,
    deoblique: boolean = false,
    oblique2card: boolean = false,
    disp_obl_xform_only: boolean = false,
    linear: boolean = false,
    cubic: boolean = false,
    nn: boolean = false,
    quintic: boolean = false,
    wsinc5: boolean = false,
    fsl_matvec: boolean = false,
    newgrid: number | null = null,
    gridset: string | null = null,
    zpad: number | null = null,
    verb: boolean = false,
    prefix: string | null = null,
): V3dWarpParameters {
    /**
     * Build parameters.
    
     * @param dataset Input dataset to be warped
     * @param matvec_in2out Read a 3x4 affine transform matrix+vector from file
     * @param matvec_out2in Read a 3x4 affine transform matrix+vector from file
     * @param tta2mni Transform a dataset in Talairach-Tournoux Atlas coordinates to MNI-152 coordinates
     * @param mni2tta Transform a dataset in MNI-152 coordinates to Talairach-Tournoux Atlas coordinates
     * @param matparent Read in the matrix from WARPDRIVE_MATVEC_* attributes in the header of dataset
     * @param card2oblique Make cardinal dataset oblique to match oblique dataset
     * @param oblique_parent Make cardinal dataset oblique to match oblique dataset
     * @param deoblique Transform an oblique dataset to a cardinal dataset
     * @param oblique2card Transform an oblique dataset to a cardinal dataset
     * @param disp_obl_xform_only Display the obliquity transform matrix
     * @param linear Use linear interpolation
     * @param cubic Use cubic interpolation
     * @param nn Use nearest neighbor interpolation
     * @param quintic Use quintic interpolation
     * @param wsinc5 Use wsinc5 interpolation
     * @param fsl_matvec Indicates that the matrix file uses FSL ordered coordinates ('LPI')
     * @param newgrid Compute new dataset on a new 3D grid, with specified spacing
     * @param gridset Compute new dataset on the same grid as another dataset
     * @param zpad Pad input dataset with specified planes of zeros on all sides before transformation
     * @param verb Print out some information along the way
     * @param prefix Set the prefix of the output dataset
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dWarp" as const,
        "tta2mni": tta2mni,
        "mni2tta": mni2tta,
        "deoblique": deoblique,
        "oblique2card": oblique2card,
        "disp_obl_xform_only": disp_obl_xform_only,
        "linear": linear,
        "cubic": cubic,
        "NN": nn,
        "quintic": quintic,
        "wsinc5": wsinc5,
        "fsl_matvec": fsl_matvec,
        "verb": verb,
        "dataset": dataset,
    };
    if (matvec_in2out !== null) {
        params["matvec_in2out"] = matvec_in2out;
    }
    if (matvec_out2in !== null) {
        params["matvec_out2in"] = matvec_out2in;
    }
    if (matparent !== null) {
        params["matparent"] = matparent;
    }
    if (card2oblique !== null) {
        params["card2oblique"] = card2oblique;
    }
    if (oblique_parent !== null) {
        params["oblique_parent"] = oblique_parent;
    }
    if (newgrid !== null) {
        params["newgrid"] = newgrid;
    }
    if (gridset !== null) {
        params["gridset"] = gridset;
    }
    if (zpad !== null) {
        params["zpad"] = zpad;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    return params;
}


function v_3d_warp_cargs(
    params: V3dWarpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dWarp");
    if ((params["matvec_in2out"] ?? null) !== null) {
        cargs.push(
            "-matvec_in2out",
            execution.inputFile((params["matvec_in2out"] ?? null))
        );
    }
    if ((params["matvec_out2in"] ?? null) !== null) {
        cargs.push(
            "-matvec_out2in",
            execution.inputFile((params["matvec_out2in"] ?? null))
        );
    }
    if ((params["tta2mni"] ?? null)) {
        cargs.push("-tta2mni");
    }
    if ((params["mni2tta"] ?? null)) {
        cargs.push("-mni2tta");
    }
    if ((params["matparent"] ?? null) !== null) {
        cargs.push(
            "-matparent",
            (params["matparent"] ?? null)
        );
    }
    if ((params["card2oblique"] ?? null) !== null) {
        cargs.push(
            "-card2oblique",
            (params["card2oblique"] ?? null)
        );
    }
    if ((params["oblique_parent"] ?? null) !== null) {
        cargs.push(
            "-oblique_parent",
            (params["oblique_parent"] ?? null)
        );
    }
    if ((params["deoblique"] ?? null)) {
        cargs.push("-deoblique");
    }
    if ((params["oblique2card"] ?? null)) {
        cargs.push("-oblique2card");
    }
    if ((params["disp_obl_xform_only"] ?? null)) {
        cargs.push("-disp_obl_xform_only");
    }
    if ((params["linear"] ?? null)) {
        cargs.push("-linear");
    }
    if ((params["cubic"] ?? null)) {
        cargs.push("-cubic");
    }
    if ((params["NN"] ?? null)) {
        cargs.push("-NN");
    }
    if ((params["quintic"] ?? null)) {
        cargs.push("-quintic");
    }
    if ((params["wsinc5"] ?? null)) {
        cargs.push("-wsinc5");
    }
    if ((params["fsl_matvec"] ?? null)) {
        cargs.push("-fsl_matvec");
    }
    if ((params["newgrid"] ?? null) !== null) {
        cargs.push(
            "-newgrid",
            String((params["newgrid"] ?? null))
        );
    }
    if ((params["gridset"] ?? null) !== null) {
        cargs.push(
            "-gridset",
            (params["gridset"] ?? null)
        );
    }
    if ((params["zpad"] ?? null) !== null) {
        cargs.push(
            "-zpad",
            String((params["zpad"] ?? null))
        );
    }
    if ((params["verb"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    cargs.push((params["dataset"] ?? null));
    return cargs;
}


function v_3d_warp_outputs(
    params: V3dWarpParameters,
    execution: Execution,
): V3dWarpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dWarpOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_warp_execute(
    params: V3dWarpParameters,
    execution: Execution,
): V3dWarpOutputs {
    /**
     * Warp (spatially transform) one 3D dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dWarpOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_warp_cargs(params, execution)
    const ret = v_3d_warp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_warp(
    dataset: string,
    matvec_in2out: InputPathType | null = null,
    matvec_out2in: InputPathType | null = null,
    tta2mni: boolean = false,
    mni2tta: boolean = false,
    matparent: string | null = null,
    card2oblique: string | null = null,
    oblique_parent: string | null = null,
    deoblique: boolean = false,
    oblique2card: boolean = false,
    disp_obl_xform_only: boolean = false,
    linear: boolean = false,
    cubic: boolean = false,
    nn: boolean = false,
    quintic: boolean = false,
    wsinc5: boolean = false,
    fsl_matvec: boolean = false,
    newgrid: number | null = null,
    gridset: string | null = null,
    zpad: number | null = null,
    verb: boolean = false,
    prefix: string | null = null,
    runner: Runner | null = null,
): V3dWarpOutputs {
    /**
     * Warp (spatially transform) one 3D dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input dataset to be warped
     * @param matvec_in2out Read a 3x4 affine transform matrix+vector from file
     * @param matvec_out2in Read a 3x4 affine transform matrix+vector from file
     * @param tta2mni Transform a dataset in Talairach-Tournoux Atlas coordinates to MNI-152 coordinates
     * @param mni2tta Transform a dataset in MNI-152 coordinates to Talairach-Tournoux Atlas coordinates
     * @param matparent Read in the matrix from WARPDRIVE_MATVEC_* attributes in the header of dataset
     * @param card2oblique Make cardinal dataset oblique to match oblique dataset
     * @param oblique_parent Make cardinal dataset oblique to match oblique dataset
     * @param deoblique Transform an oblique dataset to a cardinal dataset
     * @param oblique2card Transform an oblique dataset to a cardinal dataset
     * @param disp_obl_xform_only Display the obliquity transform matrix
     * @param linear Use linear interpolation
     * @param cubic Use cubic interpolation
     * @param nn Use nearest neighbor interpolation
     * @param quintic Use quintic interpolation
     * @param wsinc5 Use wsinc5 interpolation
     * @param fsl_matvec Indicates that the matrix file uses FSL ordered coordinates ('LPI')
     * @param newgrid Compute new dataset on a new 3D grid, with specified spacing
     * @param gridset Compute new dataset on the same grid as another dataset
     * @param zpad Pad input dataset with specified planes of zeros on all sides before transformation
     * @param verb Print out some information along the way
     * @param prefix Set the prefix of the output dataset
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dWarpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_WARP_METADATA);
    const params = v_3d_warp_params(dataset, matvec_in2out, matvec_out2in, tta2mni, mni2tta, matparent, card2oblique, oblique_parent, deoblique, oblique2card, disp_obl_xform_only, linear, cubic, nn, quintic, wsinc5, fsl_matvec, newgrid, gridset, zpad, verb, prefix)
    return v_3d_warp_execute(params, execution);
}


export {
      V3dWarpOutputs,
      V3dWarpParameters,
      V_3D_WARP_METADATA,
      v_3d_warp,
      v_3d_warp_params,
};
